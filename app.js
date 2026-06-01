let reviewData = [];
let domainConfig = {};
let activeContext = null;
let db = null;

/* ============================
   INIT DB
============================ */
function initDB() {
    const req = indexedDB.open("cisa-terminator", 1);

    req.onupgradeneeded = e => {
        db = e.target.result;
        if (!db.objectStoreNames.contains("data"))
            db.createObjectStore("data", { keyPath: "id" });
    };

    req.onsuccess = e => {
        db = e.target.result;
        loadSaved();
    };
}

initDB();

/* ============================
   CLEAR DB
============================ */
function clearDB() {
    if (!db) return;
    const tx = db.transaction(["data"], "readwrite");
    tx.objectStore("data").delete("active");

    reviewData = [];
    domainConfig = {};
    activeContext = null;

    document.getElementById("tree").innerHTML = "";
    document.getElementById("contentTitle").textContent = "DB cleared";
    document.getElementById("contentArea").innerHTML = "No data loaded.";
}

document.getElementById("clearBtn").onclick = clearDB;

/* ============================
   SAVE / LOAD
============================ */
function saveData() {
    if (!db) return;
    const tx = db.transaction(["data"], "readwrite");
    tx.objectStore("data").put({
        id: "active",
        reviewData,
        domainConfig
    });
}

function loadSaved() {
    const tx = db.transaction(["data"], "readonly");
    const req = tx.objectStore("data").get("active");

    req.onsuccess = () => {
        if (req.result) {
            reviewData = req.result.reviewData;
            domainConfig = req.result.domainConfig;
            renderTree();
        }
    };
}

/* ============================
   LOAD DOMAIN FILES (5 TXT)
============================ */
async function loadDomainFiles() {
    const files = [
        document.getElementById("dom1").files[0],
        document.getElementById("dom2").files[0],
        document.getElementById("dom3").files[0],
        document.getElementById("dom4").files[0],
        document.getElementById("dom5").files[0]
    ];

    const names = [
        "Domain 1",
        "Domain 2",
        "Domain 3",
        "Domain 4",
        "Domain 5"
    ];

    const config = {};

    for (let i = 0; i < 5; i++) {
        if (!files[i]) continue;

        const fullText = await files[i].text();

        const words = fullText
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, "")
            .split(/\s+/)
            .filter(w => w.length > 5);

        const freq = {};
        words.forEach(w => freq[w] = (freq[w] || 0) + 1);

        const keywords = Object.entries(freq)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 25)
            .map(x => x[0]);

        const firstSentence = fullText.split(/[.!?]/)[0].trim();

        config[names[i]] = {
            keywords,
            definition: firstSentence,
            fullText
        };
    }

    return config;
}

/* ============================
   IMPORT BUTTON
============================ */
document.getElementById("importBtn").onclick = async () => {
    const reviewFile = document.getElementById("reviewFile").files[0];
    if (!reviewFile) return;

    const reviewText = await reviewFile.text();
    reviewData = parseReview(reviewText);

    domainConfig = await loadDomainFiles();

    assignDomains(reviewData, domainConfig);
    saveData();
    renderTree();
};

/* ============================
   PARSER (stabil)
============================ */
function parseReview(text) {
    const chapters = [];
    const lines = text.split(/\r?\n/);

    let chapter = null;
    let section = null;

    for (let raw of lines) {
        const line = raw.trim();
        if (!line) continue;

        if (/^Chapter\s+\d+/i.test(line)) {
            chapter = { id: line.match(/\d+/)[0], sections: [], rawContent: "" };
            chapters.push(chapter);
            section = null;
            continue;
        }

        if (!chapter) continue;

        chapter.rawContent += raw + "\n";

        const m = line.match(/^(\d+\.\d+)\s+(.+)/);
        if (m) {
            section = { id: m[1], title: m[2], content: "", domain: null };
            chapter.sections.push(section);
            continue;
        }

        if (section) section.content += raw + "\n";
    }

    return chapters;
}

/* ============================
   DOMAIN ASSIGNMENT
============================ */
function assignDomains(chapters, config) {
    chapters.forEach(ch => {
        ch.sections.forEach(sec => {
            const text = (sec.title + " " + sec.content).toLowerCase();

            let bestDomain = "Uncategorized";
            let bestScore = 0;

            for (const dom in config) {
                const keys = config[dom].keywords;
                let score = 0;

                keys.forEach(k => {
                    if (text.includes(k)) score++;
                });

                if (score > bestScore) {
                    bestScore = score;
                    bestDomain = dom;
                }
            }

            sec.domain = bestDomain;
        });
    });
}

/* ============================
   UI TREE
============================ */
function setActiveContext(x) { activeContext = x; }

function escapeHtml(t) {
    return t.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");
}

function renderTree() {
    const tree = document.getElementById("tree");
    tree.innerHTML = "";

    reviewData.forEach(ch => {
        const c = document.createElement("div");
        c.className = "chapter";
        c.textContent = "Chapter " + ch.id;
        c.onclick = () => showChapter(ch);
        tree.appendChild(c);

        const groups = {};
        ch.sections.forEach(s => {
            if (!groups[s.domain]) groups[s.domain] = [];
            groups[s.domain].push(s);
        });

        for (const dom in groups) {
            const d = document.createElement("div");
            d.textContent = "📁 " + dom;
            d.style.marginLeft = "10px";
            d.style.fontWeight = "bold";
            d.onclick = () => showDomain(ch, dom);
            tree.appendChild(d);

            groups[dom].forEach(sec => {
                const s = document.createElement("div");
                s.className = "section";
                s.textContent = sec.id + " " + sec.title;
                s.onclick = e => { e.stopPropagation(); showSection(sec); };
                tree.appendChild(s);
            });
        }
    });
}

/* ============================
   VIEW HANDLERS
============================ */
function showChapter(ch) {
    setActiveContext(ch);
    document.getElementById("contentTitle").textContent = "Chapter " + ch.id;
    document.getElementById("contentArea").innerHTML =
        "<pre>" + escapeHtml(ch.rawContent) + "</pre>";
}

function showDomain(ch, dom) {
    const secs = ch.sections.filter(s => s.domain === dom);

    const ctx = {
        type: "domain",
        name: dom,
        sections: secs,
        content: secs.map(s => s.content).join("\n")
    };

    setActiveContext(ctx);

    let html = "";
    secs.forEach(s => {
        html += "<b>" + s.id + " " + s.title + "</b><br>";
        html += "<pre>" + escapeHtml(s.content) + "</pre><hr>";
    });

    document.getElementById("contentTitle").textContent = dom;
    document.getElementById("contentArea").innerHTML = html;
}

function showSection(sec) {
    setActiveContext(sec);
    document.getElementById("contentTitle").textContent = sec.id + " " + sec.title;
    document.getElementById("contentArea").innerHTML =
        "<pre>" + escapeHtml(sec.content) + "</pre>";
}

/* ============================
   DEFINITIONS
============================ */
function extractDefinitions(ctx) {
    const defs = [];

    if (ctx.name && domainConfig[ctx.name]) {
        defs.push({
            term: ctx.name,
            definition: domainConfig[ctx.name].definition
        });
    }

    const text = ctx.content || ctx.rawContent || "";
    const lines = text.split(/\r?\n/);

    lines.forEach(line => {
        const m = line.match(/^([A-Za-z][A-Za-z0-9 _-]{2,})\s*[:\-–=]\s*(.+)$/);
        if (m) defs.push({ term: m[1], definition: m[2] });
    });

    return defs;
}

/* ============================
   STUDY TOOLS
============================ */
function showSummary() {
    const ctx = activeContext;
    if (!ctx) return;

    const secs = ctx.sections || [ctx];
    let text = "";

    secs.forEach(s => text += s.id + " " + s.title + "\n");

    document.getElementById("contentArea").innerHTML =
        "<pre>" + escapeHtml(text) + "</pre>";
}

function showFlashcards() {
    const ctx = activeContext;
    if (!ctx) return;

    const secs = ctx.sections || [ctx];
    let html = "";

    secs.forEach(s => {
        const first = s.content.split("\n")[0] || "";
        html += `<div class="card"><b>${s.id} ${s.title}</b><br>${first}</div>`;
    });

    document.getElementById("contentArea").innerHTML = html;
}

function showKeyTerms() {
    const ctx = activeContext;
    if (!ctx) return;

    const defs = extractDefinitions(ctx);
    let html = "";

    defs.forEach(d => html += `<b>${d.term}</b>: ${d.definition}<br><br>`);

    document.getElementById("contentArea").innerHTML = html;
}

function showCheatSheet() {
    const ctx = activeContext;
    if (!ctx) return;

    const secs = ctx.sections || [ctx];
    let text = "";

    secs.forEach(s => text += `- ${s.id}: ${s.title}\n`);

    document.getElementById("contentArea").innerHTML =
        "<pre>" + escapeHtml(text) + "</pre>";
}

function showLogicalMap() {
    const ctx = activeContext;
    if (!ctx) return;

    const secs = ctx.sections || [ctx];
    let text = "";

    secs.forEach(s => text += `• ${s.id} ${s.title}\n`);

    document.getElementById("contentArea").innerHTML =
        "<pre>" + escapeHtml(text) + "</pre>";
}
