// ===============================
// DOMAIN-ALAPÚ CISA TERMINATOR
// ===============================

// Globális domain struktúra
let domainData = {};      // { "Domain 1": { fullText:"...", topics:[...] } }
let activeDomain = null;  // éppen kiválasztott domain
let activeTopic = null;   // éppen kiválasztott topic


// ===============================
// SEGÉDFÜGGVÉNYEK
// ===============================

// TXT fájl beolvasása
function readFile(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.readAsText(file);
    });
}

// Egyszerű topic‑felismerés: üres sorok alapján darabol
function splitIntoTopics(text) {
    const lines = text.split(/\r?\n/);
    const topics = [];
    let buffer = [];

    for (let line of lines) {
        if (line.trim() === "") {
            if (buffer.length > 0) {
                topics.push(buffer.join("\n"));
                buffer = [];
            }
        } else {
            buffer.push(line);
        }
    }

    if (buffer.length > 0) topics.push(buffer.join("\n"));

    return topics;
}


// ===============================
// DOMAIN IMPORT
// ===============================

document.getElementById("importBtn").onclick = async () => {

    const files = [
        document.getElementById("dom1").files[0],
        document.getElementById("dom2").files[0],
        document.getElementById("dom3").files[0],
        document.getElementById("dom4").files[0],
        document.getElementById("dom5").files[0]
    ];

    domainData = {}; // reset

    for (let i = 0; i < files.length; i++) {
        if (!files[i]) continue;

        const txt = await readFile(files[i]);
        const domainName = `Domain ${i + 1}`;

        domainData[domainName] = {
            fullText: txt,
            topics: splitIntoTopics(txt)
        };
    }

    buildTree();
    document.getElementById("contentTitle").innerText = "Domains Loaded";
    document.getElementById("contentArea").innerText = "Válassz egy domaint a bal oldalon.";
};


// ===============================
// DOMAIN TREE FELÉPÍTÉSE
// ===============================

function buildTree() {
    const tree = document.getElementById("tree");
    tree.innerHTML = "";

    Object.keys(domainData).forEach(domainName => {
        const d = document.createElement("div");
        d.className = "domain";
        d.innerText = domainName;

        d.onclick = () => showDomain(domainName);

        tree.appendChild(d);

        // topicok listázása
        domainData[domainName].topics.forEach((t, idx) => {
            const topicDiv = document.createElement("div");
            topicDiv.className = "topic";
            topicDiv.innerText = `Topic ${idx + 1}`;

            topicDiv.onclick = (e) => {
                e.stopPropagation();
                showTopic(domainName, idx);
            };

            tree.appendChild(topicDiv);
        });
    });
}


// ===============================
// DOMAIN MEGJELENÍTÉSE
// ===============================

function showDomain(domainName) {
    activeDomain = domainName;
    activeTopic = null;

    document.getElementById("contentTitle").innerText = domainName;
    document.getElementById("contentArea").innerHTML =
        `<pre>${escapeHtml(domainData[domainName].fullText)}</pre>`;
}


// ===============================
// TOPIC MEGJELENÍTÉSE
// ===============================

function showTopic(domainName, topicIndex) {
    activeDomain = domainName;
    activeTopic = topicIndex;

    const topicText = domainData[domainName].topics[topicIndex];

    document.getElementById("contentTitle").innerText =
        `${domainName} – Topic ${topicIndex + 1}`;

    document.getElementById("contentArea").innerHTML =
        `<pre>${escapeHtml(topicText)}</pre>`;
}


// ===============================
// HTML ESCAPE
// ===============================

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}


// ===============================
// CLEAR
// ===============================

document.getElementById("clearBtn").onclick = () => {
    domainData = {};
    activeDomain = null;
    activeTopic = null;

    document.getElementById("tree").innerHTML = "";
    document.getElementById("contentTitle").innerText = "Cleared";
    document.getElementById("contentArea").innerText = "Importáld újra a domaineket.";
};


// ===============================
// STUDY TOOLS HELYEK (külön generálom)
// ===============================

function showSummary() {}
function showFlashcards() {}
function showKeyTerms() {}
function showCheatSheet() {}
function showLogicalMap() {}
