window.addEventListener(
    "load",
    ()=>{

        renderNavigation();
        initTabs();
        initNotes();

    }
);

function initTabs(){

    document
    .querySelectorAll(
        ".tab-btn"
    )
    .forEach(btn=>{

        btn.onclick=()=>{

            document
            .querySelectorAll(
                ".tab-btn"
            )
            .forEach(
                b=>b.classList.remove(
                    "active"
                )
            );

            document
            .querySelectorAll(
                ".tab-content"
            )
            .forEach(
                t=>t.classList.remove(
                    "active"
                )
            );

            btn.classList.add(
                "active"
            );

            document
            .getElementById(
                btn.dataset.tab
            )
            .classList.add(
                "active"
            );

        };

    });

}

function initNotes(){

    const notes =
        document.getElementById(
            "notes"
        );

    notes.value =
        localStorage.getItem(
            "notes"
        ) || "";

    notes.addEventListener(
        "input",
        ()=>{

            localStorage.setItem(
                "notes",
                notes.value
            );

            document
            .getElementById(
                "notesCount"
            )
            .innerText =
            notes.value.length;

        }
    );

}
