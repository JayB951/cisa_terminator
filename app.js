let reviewData = [];

const importBtn = document.getElementById("importBtn");
const txtFile = document.getElementById("txtFile");
const tree = document.getElementById("tree");
const contentTitle = document.getElementById("contentTitle");
const contentArea = document.getElementById("contentArea");

importBtn.addEventListener("click", async () => {

    const file = txtFile.files[0];

    if (!file) {
        alert("Válassz ki egy TXT fájlt.");
        return;
    }

    const text = await file.text();

    reviewData = parseReview(text);

    renderTree();

    alert(
        `Import kész. ${reviewData.length} chapter található.`
    );
});

function parseReview(text) {

    const chapters = [];

    const lines = text.split(/\r?\n/);

    let currentChapter = null;

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i].trim();

        if (/^Chapter\s+\d+/i.test(line)) {

            const chapterNumber =
                line.match(/\d+/)[0];

            const title =
                (lines[i + 1] || "").trim();

            currentChapter = {

                id: chapterNumber,
                title: title,
                sections: [],
                content: ""

            };

            chapters.push(currentChapter);

            continue;
        }

        if (!currentChapter) {
            continue;
        }

        currentChapter.content +=
            line + "\n";

        const sectionMatch =
            line.match(/^(\d+\.\d+)\s+(.+)/);

        if (sectionMatch) {

            currentChapter.sections.push({

                id: sectionMatch[1],
                title: sectionMatch[2]

            });
        }
    }

    return chapters;
}

function renderTree() {

    tree.innerHTML = "";

    reviewData.forEach(chapter => {

        const chapterDiv =
            document.createElement("div");

        chapterDiv.className = "chapter";

        chapterDiv.textContent =
            `Chapter ${chapter.id} - ${chapter.title}`;

        chapterDiv.addEventListener(
            "click",
            () => showChapter(chapter)
        );

        tree.appendChild(chapterDiv);

        chapter.sections.forEach(section => {

            const sectionDiv =
                document.createElement("div");

            sectionDiv.className = "section";

            sectionDiv.textContent =
                `${section.id} ${section.title}`;

            sectionDiv.addEventListener(
                "click",
                (e) => {

                    e.stopPropagation();

                    showSection(
                        chapter,
                        section
                    );

                }
            );

            tree.appendChild(sectionDiv);

        });

    });

}

function showChapter(chapter) {

    contentTitle.textContent =
        `Chapter ${chapter.id} - ${chapter.title}`;

    contentArea.innerHTML =
        `<pre>${escapeHtml(
            chapter.content.substring(
                0,
                25000
            )
        )}</pre>`;
}

function showSection(
    chapter,
    section
) {

    contentTitle.textContent =
        `${section.id} ${section.title}`;

    const lines =
        chapter.content.split("\n");

    const sectionLines = [];

    let collecting = false;

    for (const line of lines) {

        const trimmed =
            line.trim();

        const nextSection =
            /^\d+\.\d+\s+/.test(trimmed);

        if (
            trimmed.startsWith(
                section.id + " "
            )
        ) {

            collecting = true;

        }

        if (
            collecting &&
            nextSection &&
            !trimmed.startsWith(
                section.id + " "
            )
        ) {

            break;

        }

        if (collecting) {

            sectionLines.push(line);

        }

    }

    contentArea.innerHTML =
        `<pre>${escapeHtml(
            sectionLines.join("\n")
        )}</pre>`;
}

function escapeHtml(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

}
