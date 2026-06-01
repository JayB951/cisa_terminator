// ======================================================
// CISA TERMINATOR – FULL APP.JS (2026.06.01)
// ======================================================

// --------------------
// GLOBALS
// --------------------
let reviewData = [];
let db;

// --------------------
// UI ELEMENTS
// --------------------
const importBtn = document.getElementById("importBtn");
const txtFile = document.getElementById("txtFile");
const tree = document.getElementById("tree");
const contentTitle = document.getElementById("contentTitle");
const contentArea = document.getElementById("contentArea");

// ======================================================
// INIT DB
// ======================================================
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
        console.log("DB ready");
    };

    request.onerror = (e) => {
        console.error("DB error:", e);
    };
}

initDB();

// ======================================================
// SAVE
// ======================================================
function saveStudyData(data, fileName) {

    if (!db) {
        console.error("DB not ready");
        return;
    }

    // JSON stringify → parse to ensure clean serializable structure
