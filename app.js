// ======================================
// CISA TERMINATOR
// APP.JS
// ======================================

console.log("CISA TERMINATOR STARTED");

// ======================================
// GLOBALS
// ======================================

let pdfBaseUrl = "";

// ======================================
// CISA NAVIGATION
// ======================================

const navigation = {

    "Domain 1 - Information System Auditing Process": [

        { title: "1.1 IS Audit Standards", page: 31 },
        { title: "1.2 Types of Audits", page: 34 },
        { title: "1.3 Risk-Based Audit Planning", page: 38 },
        { title: "1.4 Types of Controls", page: 43 },
        { title: "1.5 Audit Project Management", page: 53 },
        { title: "1.6 Audit Testing and Sampling", page: 60 },
        { title: "1.7 Audit Evidence Collection", page: 63 },
        { title: "1.8 Audit Data Analytics", page: 66 },
        { title: "1.9 Reporting and Communication", page: 73 },
        { title: "1.10 Quality Assurance", page: 79 }

    ],

    "Domain 2 - Governance and Management of IT": [],

    "Domain 3 - Information Systems Acquisition, Development and Implementation": [],

    "Domain 4 - Information Systems Operations and Business Resilience": [],

    "Domain 5 - Protection of Information Assets": []

};

// ======================================
// INIT
// ======================================

window.addEventListener("load", () => {

    renderNavigation();

    loadSavedPdf();

    loadNotes();

});

// ======================================
// PDF FUNCTIONS
// ======================================

function loadPdf() {

    const input =
        document.getElementById("driveLink");

    const url =
        input.value.trim();

    if (!url) {

        alert("Adj meg egy Google Drive linket.");

        return;
    }

    const match =
        url.match(/\/d\/([^\/]+)/);

    if (!match) {

        alert("Nem sikerült kinyerni a Google Drive File ID-t.");

        return;
    }

    const fileId =
        match[1];

    pdfBaseUrl =
        `https://drive.google.com/file/d/${fileId}/preview`;

    localStorage.setItem(
        "cisa_pdf_url",
        pdfBaseUrl
    );

    document
        .getElementById("pdfViewer")
        .src =
        pdfBaseUrl;
}

function loadSavedPdf() {

    const saved =
        localStorage.getItem(
            "cisa_pdf_url"
        );

    if (!saved)
        return;

    pdfBaseUrl = saved;

    document
        .getElementById("pdfViewer")
        .src =
        pdfBaseUrl;
}

// ======================================
// NAVIGATION
// ======================================

function renderNavigation() {

    const nav =
        document.getElementById(
            "navigation"
        );

    if (!nav)
        return;

    nav.innerHTML = "";

    Object.keys(navigation)
        .forEach(domain => {

            const domainDiv =
                document.createElement(
                    "div"
                );

            domainDiv.className =
                "domain";

            domainDiv.textContent =
                domain;

            nav.appendChild(
                domainDiv
            );

            navigation[domain]
                .forEach(item => {

                const topicDiv =
                    document.createElement(
                        "div"
                    );

                topicDiv.className =
                    "topic";

                topicDiv.textContent =
                    item.title;

                topicDiv.onclick =
                    () => {

                    goToPage(
                        item.page
                    );

                };

                nav.appendChild(
                    topicDiv
                );

            });

        });

}

// ======================================
// PAGE JUMP
// ======================================

function goToPage(page) {

    if (!pdfBaseUrl) {

        alert(
            "Előbb töltsd be a Review PDF-et."
        );

        return;
    }

    const viewer =
        document.getElementById(
            "pdfViewer"
        );

    viewer.src =
        `${pdfBaseUrl}#page=${page}`;
}

// ======================================
// NOTES
// ======================================

function saveNotes() {

    const notes =
        document.getElementById(
            "notes"
        );

    if (!notes)
        return;

    localStorage.setItem(
        "cisa_notes",
        notes.value
    );
}

function loadNotes() {

    const notes =
        document.getElementById(
            "notes"
        );

    if (!notes)
        return;

    notes.value =
        localStorage.getItem(
            "cisa_notes"
        ) || "";

    notes.addEventListener(
        "input",
        saveNotes
    );
}

// ======================================
// STUDY TOOLS PLACEHOLDERS
// ======================================

function showSummary() {

    alert(
        "Summary modul hamarosan."
    );

}

function showFlashcards() {

    alert(
        "Flashcards modul hamarosan."
    );

}

function showCheatSheet() {

    alert(
        "Cheat Sheet modul hamarosan."
    );

}

function showLogicalMap() {

    alert(
        "Logical Map modul hamarosan."
    );

}

// ======================================
// DEBUG
// ======================================

window.loadPdf = loadPdf;
window.showSummary = showSummary;
window.showFlashcards = showFlashcards;
window.showCheatSheet = showCheatSheet;
window.showLogicalMap = showLogicalMap;
