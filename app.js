// =====================================
// CISA TERMINATOR
// APP.JS
// =====================================

console.log("CISA Terminator started");

// =====================================
// INIT
// =====================================

window.addEventListener("load", () => {

    console.log("Page loaded");

    initTabs();
    initNotes();
    renderNavigation();

});

// =====================================
// TAB SYSTEM
// =====================================

function initTabs() {

    const buttons =
        document.querySelectorAll(".tab-btn");

    buttons.forEach(btn => {

        btn.addEventListener("click", () => {

            const target =
                btn.dataset.tab;

            document
                .querySelectorAll(".tab-btn")
                .forEach(b =>
                    b.classList.remove("active")
                );

            document
                .querySelectorAll(".tab-content")
                .forEach(tab =>
                    tab.classList.remove("active")
                );

            btn.classList.add("active");

            const tab =
                document.getElementById(
                    target
                );

            if (tab) {

                tab.classList.add(
                    "active"
                );

            }

        });

    });

}

// =====================================
// NOTES
// =====================================

function initNotes() {

    const notes =
        document.getElementById(
            "notes"
        );

    if (!notes)
        return;

    const saved =
        localStorage.getItem(
            "cisa_notes"
        );

    if (saved) {

        notes.value = saved;

    }

    notes.addEventListener(
        "input",
        () => {

            localStorage.setItem(
                "cisa_notes",
                notes.value
            );

            updateStats();

        }
    );

    updateStats();

}

// =====================================
// STATS
// =====================================

function updateStats() {

    const notes =
        document.getElementById(
            "notes"
        );

    const notesCount =
        document.getElementById(
            "notesCount"
        );

    if (
        notes &&
        notesCount
    ) {

        const count =
            notes.value
            .trim()
            .length;

        notesCount.textContent =
            count;

    }

}

// =====================================
// HIGHLIGHTS
// =====================================

function addHighlight(text) {

    const highlights =
        JSON.parse(
            localStorage.getItem(
                "cisa_highlights"
            ) || "[]"
        );

    highlights.push(text);

    localStorage.setItem(
        "cisa_highlights",
        JSON.stringify(
            highlights
        )
    );

    renderHighlights();

}

function renderHighlights() {

    const container =
        document.getElementById(
            "highlightsList"
        );

    if (!container)
        return;

    const highlights =
        JSON.parse(
            localStorage.getItem(
                "cisa_highlights"
            ) || "[]"
        );

    if (
        highlights.length === 0
    ) {

        container.innerHTML =
            "No highlights yet.";

        return;

    }

    container.innerHTML = "";

    highlights.forEach(item => {

        const div =
            document.createElement(
                "div"
            );

        div.className =
            "flashcard";

        div.textContent =
            item;

        container.appendChild(
            div
        );

    });

}

// =====================================
// FLASHCARDS
// =====================================

function renderFlashcards() {

    const container =
        document.getElementById(
            "flashcardsList"
        );

    if (!container)
        return;

}

// =====================================
// CHEAT SHEETS
// =====================================

function renderCheatSheets() {

    const area =
        document.getElementById(
            "cheatSheetArea"
        );

    if (!area)
        return;

}

// =====================================
// STUDY TIME
// =====================================

let sessionStart =
    Date.now();

window.addEventListener(
    "beforeunload",
    () => {

        const elapsed =
            Date.now() -
            sessionStart;

        const previous =
            Number(
                localStorage.getItem(
                    "cisa_study_time"
                ) || 0
            );

        localStorage.setItem(
            "cisa_study_time",
            previous +
            elapsed
        );

    }
);

function renderStudyTime() {

    const target =
        document.getElementById(
            "studyTime"
        );

    if (!target)
        return;

    const millis =
        Number(
            localStorage.getItem(
                "cisa_study_time"
            ) || 0
        );

    const minutes =
        Math.floor(
            millis / 60000
        );

    target.textContent =
        minutes + " min";

}

// =====================================
// STARTUP
// =====================================

window.addEventListener(
    "load",
    () => {

        renderHighlights();
        renderFlashcards();
        renderCheatSheets();
        renderStudyTime();

    }
);
