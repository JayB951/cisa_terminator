let reviewStructure = [];
const uploadBtn = document.getElementById("uploadBtn");
const pdfUpload = document.getElementById("pdfUpload");
const documentList = document.getElementById("documentList");
const readerContent = document.getElementById("readerContent");

let documents =
    JSON.parse(localStorage.getItem("documents") || "[]");

renderDocuments();

uploadBtn.addEventListener("click", async () => {

    const file = pdfUpload.files[0];

    if (!file) {
        alert("Válassz PDF-et.");
        return;
    }

    const extractedText = await extractPdfText(file);

    const documentData = {
        id: Date.now(),
        name: file.name,
        uploadedAt: new Date().toISOString(),
        text: extractedText
    };

    documents.push(documentData);

    localStorage.setItem(
        "documents",
        JSON.stringify(documents)
    );

    renderDocuments();

    showDocument(documentData);

});

async function extractPdfText(file) {

    const arrayBuffer = await file.arrayBuffer();

    const pdf = await pdfjsLib.getDocument({
        data: arrayBuffer
    }).promise;

    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {

        const page = await pdf.getPage(pageNum);

        const content =
            await page.getTextContent();

        const text = content.items
            .map(item => item.str)
            .join(" ");

        fullText += "\n\n" + text;
    }

    return fullText;
}

function renderDocuments() {

    if (documents.length === 0) {

        documentList.innerHTML =
            "<li>No document uploaded</li>";

        return;
    }

    documentList.innerHTML = "";

    documents.forEach(doc => {

        const li = document.createElement("li");

        li.textContent = doc.name;

        li.style.cursor = "pointer";

        li.onclick = () => showDocument(doc);

        documentList.appendChild(li);

    });

}

function showDocument(doc) {

    const preview =
        doc.text.substring(0, 5000);

    readerContent.innerHTML = `
        <h3>${doc.name}</h3>

        <pre style="
            white-space: pre-wrap;
            font-family: Arial;
        ">
${preview}
        </pre>
    `;
}
const txtUpload =
    document.getElementById("txtUpload");

const importTxtBtn =
    document.getElementById("importTxtBtn");

importTxtBtn?.addEventListener(
    "click",
    async () => {

        const file =
            txtUpload.files[0];

        if (!file) {

            alert("Choose TXT file.");

            return;
        }

        const text =
            await file.text();

        parseReview(text);

    }
);
function parseReview(text) {

    reviewStructure = [];

    const lines =
        text.split("\n");

    let currentChapter = null;

    for (let i = 0; i < lines.length; i++) {

        const line =
            lines[i].trim();

        if (
            /^Chapter\s+\d+/i.test(line)
        ) {

            const chapterNumber =
                line.match(/\d+/)[0];

            const title =
                (lines[i + 1] || "")
                .trim();

            currentChapter = {

                id: chapterNumber,

                title,

                sections: []

            };

            reviewStructure.push(
                currentChapter
            );

            continue;
        }

        if (!currentChapter)
            continue;

        const sectionMatch =
            line.match(
                /^(\d+\.\d+)\s+(.+)/
            );

        if (sectionMatch) {

            currentChapter.sections.push({

                id: sectionMatch[1],

                title: sectionMatch[2]

            });
        }
    }

    renderReviewTree();
}
function renderReviewTree() {

    const domainList =
        document.getElementById(
            "domainList"
        );

    domainList.innerHTML = "";

    reviewStructure.forEach(
        chapter => {

            const li =
                document.createElement(
                    "li"
                );

            li.innerHTML = `
                <strong>
                    Chapter ${chapter.id}
                </strong>
                <br>
                ${chapter.title}
            `;

            domainList.appendChild(
                li
            );

            chapter.sections.forEach(
                section => {

                    const sec =
                        document.createElement(
                            "li"
                        );

                    sec.style.paddingLeft =
                        "20px";

                    sec.textContent =
                        `${section.id} ${section.title}`;

                    domainList.appendChild(
                        sec
                    );
                }
            );
        }
    );
}
