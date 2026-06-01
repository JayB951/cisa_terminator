let reviewData = [];
let db;

// -------------------------
// UI ELEMENTS
// -------------------------
const importBtn = document.getElementById("importBtn");
const txtFile = document.getElementById("txtFile");
const tree = document.getElementById("tree");
const contentTitle = document.getElementById("contentTitle");
const contentArea = document.getElementById("contentArea");

// -------------------------
// INIT DB (IndexedDB)
// -------------------------
function initDB() {

    const request = indexedDB.open("cisa-terminator", 1);

    request.onupgradeneeded = function (e) {

        db = e.target.result;

        db.createObjectStore("studyFiles", {
            keyPath: "id"
        });

    };

    request.onsuccess = function (e) {

        db = e.target.result;

        loadSavedFile();

    };

}

// -------------------------
// SAVE FULL DATA
// -------------------------
function saveStudyData(data, fileName) {

    const tx = db.transaction(["studyFiles"], "readwrite");
    const store = tx.objectStore("studyFiles");

    store.put({
        id: "active",
        fileName,
        importedAt: new Date().toISOString(),
        data
    });

}

// -------------------------
// LOAD SAVED DATA
// -------------------------
function loadSavedFile() {

    const tx = db.transaction(["studyFiles"], "readonly");
    const store = tx.objectStore("studyFiles");

    const req = store.get("active");

    req.onsuccess = function () {

        if (req.result) {

            reviewData = req.result.data;

            renderTree();

            console.log("Loaded:", req.result.fileName);

        }

    };

}

// -------------------------
// IMPORT FILE
// -------------------------
importBtn.addEventListener("click", async () => {

    const file = txtFile.files[0];

    if (!file) {
        alert("Válassz ki egy TXT fájlt.");
        return;
    }

    const text = await file.text();

    const parsed = parseReview(text);

    reviewData = parsed;

    renderTree();

    saveStudyData(parsed, file.name);

    alert(`Import kész. ${parsed.length} chapter betöltve + mentve.`);

});

// -------------------------
// PARSER (FULL CONTENT STORE)
// -------------------------
function parseReview(text) {

    const chapters = [];
    const lines = text.split(/\r?\n/);

    let currentChapter = null;
    let currentSection = null;

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i].trim();

        // CHAPTER
        if (/^Chapter\s+\d+/i.test(line)) {

            const chapterNumber = line.match(/\d+/)[0];
            const title = (lines[i + 1] || "").trim();

            currentChapter = {
                id: chapterNumber,
                title,
                domains: [],
                rawContent: ""
            };

            chapters.push(currentChapter);
            continue;
        }

        if (!currentChapter) continue;

        currentChapter.rawContent += line + "\n";

        // SECTION
        const sectionMatch = line.match(/^(\d+\.\d+)\s+(.+)/);

        if (sectionMatch) {

            currentSection = {
                id: sectionMatch[1],
                title: sectionMatch[2],
                content: ""
            };

            let domain = detectDomain(line);

            let domainObj =
                currentChapter.domains.find(d => d.name === domain);

            if (!domainObj) {
                domainObj = { name: domain, sections: [] };
                currentChapter.domains.push(domainObj);
            }

            domainObj.sections.push(currentSection);
            continue;
        }

        // SECTION CONTENT
        if (currentSection) {
            currentSection.content += line + "\n";
        }
    }

    return chapters;
}

// -------------------------
// SIMPLE DOMAIN DETECTION
// -------------------------
function detectDomain(text) {

    const rules = [
        { name: "Governance", keywords: ["policy", "governance", "framework", "compliance"] },
        { name: "Risk Management", keywords: ["risk", "threat", "vulnerability", "impact"] },
        { name: "Audit Process", keywords: ["audit", "control", "evidence", "test"] },
        { name: "Security Operations", keywords: ["incident", "response", "monitoring"] }
    ];

    for (const rule of rules) {
        for (const kw of rule.keywords) {
            if (text.toLowerCase().includes(kw)) {
                return rule.name;
            }
        }
    }

    return "General";
}

// -------------------------
// TREE RENDER
// -------------------------
function renderTree() {

    tree.innerHTML = "";

    reviewData.forEach(chapter => {

        const chapterDiv = document.createElement("div");
        chapterDiv.className = "chapter";
        chapterDiv.textContent = `Chapter ${chapter.id} - ${chapter.title}`;

        chapterDiv.onclick = () => showChapter(chapter);

        tree.appendChild(chapterDiv);

        chapter.domains.forEach(domain => {

            const d = document.createElement("div");
            d.textContent = `📁 ${domain.name}`;
            d.style.marginLeft = "10px";
            d.style.fontWeight = "bold";

            tree.appendChild(d);

            domain.sections.forEach(section => {

                const s = document.createElement("div");
                s.className = "section";
                s.textContent = `${section.id} ${section.title}`;

                s.onclick = (e) => {
                    e.stopPropagation();
                    showSection(section);
                };

                tree.appendChild(s);

            });

        });

    });

}

// -------------------------
// VIEW CHAPTER
// -------------------------
function showChapter(chapter) {

    contentTitle.textContent =
        `Chapter ${chapter.id} - ${chapter.title}`;

    contentArea.innerHTML =
        `<pre>${escapeHtml(chapter.rawContent)}</pre>`;

}

// -------------------------
// VIEW SECTION
// -------------------------
function showSection(section) {

    contentTitle.textContent =
        `${section.id} - ${section.title}`;

    contentArea.innerHTML =
        `<pre>${escapeHtml(section.content)}</pre>`;

}

// -------------------------
// HTML ESCAPE
// -------------------------
function escapeHtml(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

}
