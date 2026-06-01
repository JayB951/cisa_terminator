let reviewData = [];
let db;

const importBtn = document.getElementById("importBtn");
const txtFile = document.getElementById("txtFile");
const tree = document.getElementById("tree");
const contentTitle = document.getElementById("contentTitle");
const contentArea = document.getElementById("contentArea");

// --------------------
// INIT DB
// --------------------
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

// --------------------
// SAVE
// --------------------
function saveStudyData(data, fileName) {
    if (!db) return;

    const safeData = JSON.parse(JSON.stringify(data));

    const tx = db.transaction(["studyFiles"], "readwrite");
    const store = tx.objectStore("studyFiles");

    store.put({
        id: "active",
        fileName,
        importedAt: new Date().toISOString(),
        data: safeData
    });
}

// --------------------
// LOAD
// --------------------
function loadSavedFile() {
    const tx = db.transaction(["studyFiles"], "readonly");
    const store = tx.objectStore("studyFiles");

    const req = store.get("active");

    req.onsuccess = () => {
        if (req.result) {
            reviewData = req.result.data;
            renderTree();
        }
    };
}

// --------------------
// IMPORT
// --------------------
importBtn.addEventListener("click", async () => {
    const file = txtFile.files[0];
    if (!file) return;

    const text = await file.text();
    reviewData = parseReview(text);

    renderTree();
    saveStudyData(reviewData, file.name);
});

// --------------------
// PARSER
// --------------------
function parseReview(text) {
    const chapters = [];
    const lines = text.split(/\r?\n/);

    let currentChapter = null;
    let currentSection = null;

    for (let line of lines) {
        line = line.trim();
        if (!line) continue;

        if (/^Chapter\s+\d+/i.test(line)) {
            const num = line.match(/\d+/)[0];
            currentChapter = { id: num, title: "", domains: [], rawContent: "" };
            chapters.push(currentChapter);
            currentSection = null;
            continue;
        }

        if (!currentChapter) continue;

        currentChapter.rawContent += line + "\n";

        const sectionMatch = line.match(/^(\d+\.\d+)\s+(.+)/);
        const isValidSection =
            sectionMatch &&
            sectionMatch[2].length > 2 &&
            sectionMatch[2].length < 120 &&
            /[A-Za-z]/.test(sectionMatch[2]);

        if (isValidSection) {
            currentSection = {
                id: sectionMatch[1],
                title: sectionMatch[2],
                content: ""
            };

            let domain = detectDomain(line);
            let domainObj = currentChapter.domains.find(d => d.name === domain);

            if (!domainObj) {
                domainObj = { name: domain, sections: [] };
                currentChapter.domains.push(domainObj);
            }

            domainObj.sections.push(currentSection);
            continue;
        }

        if (currentSection) {
            currentSection.content += line + "\n";
        }
    }

    return chapters;
}

// --------------------
// DOMAIN DETECTION
// --------------------
function detectDomain(text) {
    const rules = [
        { name: "Governance", keywords: ["policy", "governance", "framework", "compliance"] },
        { name: "Risk", keywords: ["risk", "threat", "vulnerability", "impact"] },
        { name: "Audit", keywords: ["audit", "control", "evidence", "test"] },
        { name: "Security Ops", keywords: ["incident", "response", "monitoring"] }
    ];

    const t = text.toLowerCase();

    for (const r of rules) {
        for (const k of r.keywords) {
            if (t.includes(k)) return r.name;
        }
    }

    return "General";
}

// --------------------
// RENDER TREE
// --------------------
function renderTree() {
    tree.innerHTML = "";

    reviewData.forEach(ch => {
        const c = document.createElement("div");
        c.className = "chapter";
        c.textContent = `Chapter ${ch.id}`;
        c.onclick = () => showChapter(ch);
        tree.appendChild(c);

        ch.domains.forEach(d => {
            const dom = document.createElement("div");
            dom.textContent = "📁 " + d.name;
            dom.style.marginLeft = "10px";
            dom.style.fontWeight = "bold";
            tree.appendChild(dom);

            d.sections.forEach(s => {
                const sec = document.createElement("div");
                sec.className = "section";
                sec.textContent = `${s.id} ${s.title}`;
                sec.onclick = (e) => {
                    e.stopPropagation();
                    showSection(s);
                };
                tree.appendChild(sec);
            });
        });
    });
}

// --------------------
// VIEW CHAPTER
// --------------------
function showChapter(ch) {
    contentTitle.textContent = `Chapter ${ch.id}`;
    contentArea.innerHTML = `<pre>${escapeHtml(ch.rawContent)}</pre>`;
}

// --------------------
// VIEW SECTION
// --------------------
function showSection(s) {
    contentTitle.textContent = `${s.id} ${s.title}`;
    contentArea.innerHTML = `<pre>${escapeHtml(s.content)}</pre>`;
}

// --------------------
// ESCAPE HTML
// --------------------
function escapeHtml(text) {
    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");
}

// --------------------
// STUDY TOOL UI
// --------------------
function getActiveChapter() {
    return reviewData[0] || null;
}

function showSummary() {
    const ch = getActiveChapter();
    if (!ch) return;
    contentTitle.textContent = "Summary";
    contentArea.innerHTML = `<pre>${generateSummary(ch)}</pre>`;
}

function showFlashcards() {
    const ch = getActiveChapter();
    if (!ch) return;
    const cards = generateFlashcards(ch);
    let html = "";
    cards.forEach(c => {
        html += `<div class="card"><b>${c.front}</b><br>${c.back}</div>`;
    });
    contentTitle.textContent = "Flashcards";
    contentArea.innerHTML = html;
}

function showKeyTerms() {
    const ch = getActiveChapter();
    if (!ch) return;
    const terms = generateKeyTerms(ch);
    contentTitle.textContent = "Key Terms";
    contentArea.innerHTML = `<pre>${terms.join("\n")}</pre>`;
}

function showCheatSheet() {
    const ch = getActiveChapter();
    if (!ch) return;
    contentTitle.textContent = "Cheat Sheet";
    contentArea.innerHTML = `<pre>${generateCheatSheet(ch)}</pre>`;
}

function showLogicalMap() {
    const ch = getActiveChapter();
    if (!ch) return;
    contentTitle.textContent = "Logical Map";
    contentArea.innerHTML = `<pre>${generateLogicalMap(ch)}</pre>`;
}
