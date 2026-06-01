// ============================
// CISA TERMINATOR - APP.JS
// ============================

let reviewData = [];        // Chapters + Sections
let domainConfig = {};      // Feltöltött domains.json
let activeContext = null;   // chapter / domain / section
let db = null;

// ============================
// INIT DB
// ============================
function initDB() {
    const request = indexedDB.open("cisa-terminator", 1);

    request.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains("studyFiles")) {
            db.createObjectStore("studyFiles", { keyPath: "id" });
        }
    };

    request.onsuccess = (e) => {
        db = e.target.result;
        loadSavedFile();
    };

    request.onerror = (e) => {
        console.error("DB error:", e);
    };
}

initDB();

// ============================
// CLEAR DB
// ============================
function clearDB() {
    if (!db) return;
    const tx = db.transaction(["studyFiles"], "readwrite");
    const store = tx.objectStore("studyFiles");
    store.delete("active");

    reviewData = [];
    domainConfig = {};
    activeContext = null;

    document.getElementById("tree").innerHTML = "";
    document.getElementById("contentTitle").textContent = "DB cleared";
    document.getElementById("contentArea").innerHTML = "No data loaded.";
}

document.getElementById("clearBtn").addEventListener("click", clearDB);

// ============================
// SAVE TO DB
// ============================
function saveStudyData() {
    if (!db) return;

    const tx = db.transaction(["studyFiles"], "readwrite");
    const store = tx.objectStore("studyFiles");

    store.put({
        id: "active",
        reviewData,
        domainConfig,
        savedAt: new Date().toISOString()
    });
}

// ============================
// LOAD FROM DB
// ============================
function loadSavedFile() {
    const tx = db.transaction(["studyFiles"], "readonly");
    const store = tx.objectStore("studyFiles");

    const req = store.get("active");

    req.onsuccess = () => {
        if (req.result) {
            reviewData = req.result.reviewData || [];
            domainConfig = req.result.domainConfig || {};
            renderTree();
        }
    };
}

// ============================
// FILE UPLOAD HANDLING
// ============================
const txtFile = document.getElementById("txtFile");
const domainFile = document.getElementById("domainFile");
const importBtn = document.getElementById("importBtn");

importBtn.addEventListener("click", async () => {
    const txt = txtFile.files[0];
    const dom = domainFile.files[0];

    if (!txt) {
        alert("Töltsd fel a Review TXT-t!");
        return;
    }

    if (!dom) {
        alert("Töltsd fel a Domains JSON-t!");
        return;
    }

    const reviewText = await txt.text();
    const domainText = await dom.text();

    domainConfig = JSON.parse(domainText);

    reviewData = parseReview(reviewText);
    assignDomains(reviewData, domainConfig);

    saveStudyData();
    renderTree();
});

// ============================
// PARSER (stabil, domain-független)
// ============================
function parseReview(text) {
    const chapters = [];
    const lines = text.split(/\r?\n/);

    let currentChapter = null;
    let currentSection = null;

    for (let rawLine of lines) {
        const line = rawLine.trim();
        if (!line) continue;

        // CHAPTER
        if (/^Chapter\s+\d+/i.test(line)) {
            const num = line.match(/\d+/)[0];

            currentChapter = {
                id: num,
                sections: [],
                rawContent: ""
            };

            chapters.push(currentChapter);
            currentSection = null;
            continue;
        }

        if (!currentChapter) continue;

        currentChapter.rawContent += rawLine + "\n";

        // SECTION
        const secMatch = line.match(/^(\d+\.\d+)\s+(.+)/);
        if (secMatch) {
            currentSection = {
                id: secMatch[1],
                title: secMatch[2],
                content: "",
                domain: null
            };

            currentChapter.sections.push(currentSection);
            continue;
        }

        if (currentSection) {
            currentSection.content += rawLine + "\n";
        }
    }

    return chapters;
}

// ============================
// DOMAIN ASSIGNMENT
// ============================
function assignDomains(chapters, domainConfig) {
    chapters.forEach(ch => {
        ch.sections.forEach(sec => {
            const text = (sec.title + " " + sec.content).toLowerCase();

            for (const domainName in domainConfig) {
                const keywords = domainConfig[domainName].keywords || [];

                if (keywords.some(k => text.includes(k.toLowerCase()))) {
                    sec.domain = domainName;
                    break;
                }
            }

            if (!sec.domain) {
                sec.domain = "Uncategorized";
            }
        });
    });
}

// ============================
// CONTEXT HANDLING
// ============================
function setActiveContext(obj) {
    activeContext = obj;
}

function getActiveContext() {
    return activeContext;
}

// ============================
// UI: TREE RENDER
// ============================
function renderTree() {
    const tree = document.getElementById("tree");
    tree.innerHTML = "";

    reviewData.forEach(ch => {
        const c = document.createElement("div");
        c.className = "chapter";
        c.textContent = `Chapter ${ch.id}`;
        c.onclick = () => showChapter(ch);
        tree.appendChild(c);

        // domain grouping
        const domains = {};

        ch.sections.forEach(sec => {
            if (!domains[sec.domain]) domains[sec.domain] = [];
            domains[sec.domain].push(sec);
        });

        for (const domName in domains) {
            const dom = document.createElement("div");
            dom.textContent = "📁 " + domName;
            dom.style.marginLeft = "10px";
            dom.style.fontWeight = "bold";
            dom.onclick = () => showDomain(ch, domName);
            tree.appendChild(dom);

            domains[domName].forEach(sec => {
                const secDiv = document.createElement("div");
                secDiv.className = "section";
                secDiv.textContent = `${sec.id} ${sec.title}`;
                secDiv.onclick = (e) => {
                    e.stopPropagation();
                    showSection(sec);
                };
                tree.appendChild(secDiv);
            });
        }
    });
}

// ============================
// VIEW: CHAPTER
// ============================
function showChapter(ch) {
    setActiveContext(ch);
    document.getElementById("contentTitle").textContent = `Chapter ${ch.id}`;
    document.getElementById("contentArea").innerHTML =
        `<pre>${escapeHtml(ch.rawContent)}</pre>`;
}

// ============================
// VIEW: DOMAIN
// ============================
function showDomain(chapter, domainName) {
    const domainSections = chapter.sections.filter(s => s.domain === domainName);

    const ctx = {
        type: "domain",
        name: domainName,
        sections: domainSections,
        content: domainSections.map(s => s.content).join("\n")
    };

    setActiveContext(ctx);

    document.getElementById("contentTitle").textContent = domainName;

    let html = "";
    domainSections.forEach(sec => {
        html += `<b>${sec.id} ${sec.title}</b><br>`;
        html += `<pre>${escapeHtml(sec.content)}</pre><hr>`;
    });

    document.getElementById("contentArea").innerHTML = html;
}

// ============================
// VIEW: SECTION
// ============================
function showSection(sec) {
    setActiveContext(sec);
    document.getElementById("contentTitle").textContent = `${sec.id} ${sec.title}`;
    document.getElementById("contentArea").innerHTML =
        `<pre>${escapeHtml(sec.content)}</pre>`;
}

// ============================
// ESCAPE HTML
// ============================
function escapeHtml(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

// ============================
// DEFINITION EXTRACTOR
// ============================
function extractDefinitions(ctx) {
    const defs = [];

    // domain definíció
    if (ctx.domain && domainConfig[ctx.domain]) {
        defs.push({
            term: ctx.domain,
            definition: domainConfig[ctx.domain].definition || ""
        });
    }

    const text = ctx.content || ctx.rawContent || "";
    const lines = text.split(/\r?\n/);

    for (let line of lines) {
        const m = line.match(/^([A-Za-z][A-Za-z0-9 _-]{2,})\s*[:\-–=]\s*(.+)$/);
        if (m) {
            defs.push({
                term: m[1].trim(),
                definition: m[2].trim()
            });
        }
    }

    return defs;
}

// ============================
// STUDY TOOLS
// =================
function extractDefinitions(ctx) {
    const defs = [];

    if (ctx.domain && domainConfig[ctx.domain]) {
        defs.push({
            term: ctx.domain,
            definition: domainConfig[ctx.domain].definition || ""
        });
    }

    const text = ctx.content || ctx.rawContent || "";
    const lines = text.split(/\r?\n/);

    for (let line of lines) {
        const m = line.match(/^([A-Za-z][A-Za-z0-9 _-]{2,})\s*[:\-–=]\s*(.+)$/);
        if (m) {
            defs.push({
                term: m[1].trim(),
                definition: m[2].trim()
            });
        }
    }

    return defs;
}

function showSummary() {
    const ctx = activeContext;
    if (!ctx) return;

    let text = "";
    const sections = ctx.sections || [ctx];

    sections.forEach(sec => {
        text += `${sec.id} ${sec.title}\n`;
    });

    document.getElementById("contentArea").innerHTML =
        `<pre>${escapeHtml(text)}</pre>`;
}

function showFlashcards() {
    const ctx = activeContext;
    if (!ctx) return;

    let html = "";
    const sections = ctx.sections || [ctx];

    sections.forEach(sec => {
        const firstLine = sec.content.split("\n")[0] || "";
        html += `<div class="card"><b>${sec.id} ${sec.title}</b><br>${firstLine}</div>`;
    });

    document.getElementById("contentArea").innerHTML = html;
}

function showKeyTerms() {
    const ctx = activeContext;
    if (!ctx) return;

    const defs = extractDefinitions(ctx);
    let html = "";

    defs.forEach(d => {
        html += `<b>${d.term}</b>: ${d.definition}<br><br>`;
    });

    document.getElementById("contentArea").innerHTML = html;
}

function showCheatSheet() {
    const ctx = activeContext;
    if (!ctx) return;

    let text = "";
    const sections = ctx.sections || [ctx];

    sections.forEach(sec => {
        text += `- ${sec.id}: ${sec.title}\n`;
    });

    document.getElementById("contentArea").innerHTML =
        `<pre>${escapeHtml(text)}</pre>`;
}

function showLogicalMap() {
    const ctx = activeContext;
    if (!ctx) return;

    let text = "";
    const sections = ctx.sections || [ctx];

    sections.forEach(sec => {
        text += `• ${sec.id} ${sec.title}\n`;
    });

    document.getElementById("contentArea").innerHTML =
        `<pre>${escapeHtml(text)}</pre>`;
}
