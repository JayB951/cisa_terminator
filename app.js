let reviewData = [];
let db;

const importBtn = document.getElementById("importBtn");
const txtFile = document.getElementById("txtFile");
const tree = document.getElementById("tree");
const contentTitle = document.getElementById("contentTitle");
const contentArea = document.getElementById("contentArea");

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
