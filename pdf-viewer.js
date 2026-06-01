// =====================================
// PDF VIEWER
// =====================================

let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;
let scale = 1.25;

// =====================================
// PDF.JS IMPORT
// =====================================

let pdfjsLib = null;

async function initPdfJs() {

    pdfjsLib = await import(
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs"
    );

    pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs";

    console.log("PDF.js loaded");

}

initPdfJs();

// =====================================
// ELEMENTS
// =====================================

const canvas =
    document.getElementById(
        "pdfCanvas"
    );

const ctx =
    canvas.getContext(
        "2d"
    );

// =====================================
// LOAD PDF
// =====================================

document
    .getElementById(
        "loadPdfBtn"
    )
    .addEventListener(
        "click",
        loadPdf
    );

async function loadPdf() {

    const file =
        document
        .getElementById(
            "pdfFile"
        )
        .files[0];

    if (!file) {

        alert(
            "Válassz PDF fájlt."
        );

        return;

    }

    try {

        console.log(
            "Loading PDF..."
        );

        const buffer =
            await file.arrayBuffer();

        const task =
            pdfjsLib.getDocument({
                data: buffer
            });

        pdfDoc =
            await task.promise;

        totalPages =
            pdfDoc.numPages;

        currentPage = 1;

        await renderPage(
            currentPage
        );

        console.log(
            "PDF loaded",
            totalPages,
            "pages"
        );

    }
    catch(err) {

        console.error(err);

        alert(
            "PDF betöltési hiba."
        );

    }

}

// =====================================
// RENDER PAGE
// =====================================

async function renderPage(pageNumber) {

    if (!pdfDoc)
        return;

    const page =
        await pdfDoc.getPage(
            pageNumber
        );

    const viewport =
        page.getViewport({
            scale
        });

    canvas.width =
        viewport.width;

    canvas.height =
        viewport.height;

    await page.render({

        canvasContext: ctx,
        viewport

    }).promise;

    currentPage =
        pageNumber;

    updatePageInfo();

}

// =====================================
// PAGE INFO
// =====================================

function updatePageInfo() {

    document
        .getElementById(
            "pageInfo"
        )
        .innerText =
        `Page ${currentPage} / ${totalPages}`;

    const input =
        document
        .getElementById(
            "gotoPageInput"
        );

    if (input) {

        input.value =
            currentPage;

    }

}

// =====================================
// NEXT PAGE
// =====================================

document
    .getElementById(
        "nextPageBtn"
    )
    .addEventListener(
        "click",
        async ()=>{

        if (!pdfDoc)
            return;

        if (
            currentPage <
            totalPages
        ) {

            await renderPage(
                currentPage + 1
            );

        }

    });

// =====================================
// PREVIOUS PAGE
// =====================================

document
    .getElementById(
        "prevPageBtn"
    )
    .addEventListener(
        "click",
        async ()=>{

        if (!pdfDoc)
            return;

        if (
            currentPage > 1
        ) {

            await renderPage(
                currentPage - 1
            );

        }

    });

// =====================================
// GOTO PAGE
// =====================================

document
    .getElementById(
        "gotoPageBtn"
    )
    .addEventListener(
        "click",
        gotoPageFromInput
    );

document
    .getElementById(
        "gotoPageInput"
    )
    .addEventListener(
        "keydown",
        (event)=>{

        if (
            event.key ===
            "Enter"
        ) {

            gotoPageFromInput();

        }

    });

async function gotoPageFromInput() {

    if (!pdfDoc)
        return;

    const pageNumber =
        Number(
            document
            .getElementById(
                "gotoPageInput"
            )
            .value
        );

    if (
        isNaN(pageNumber)
    )
        return;

    if (
        pageNumber < 1 ||
        pageNumber > totalPages
    ) {

        alert(
            `Érvényes oldal: 1-${totalPages}`
        );

        return;

    }

    await renderPage(
        pageNumber
    );

}

// =====================================
// DOMAIN NAVIGATION API
// =====================================

async function goToPdfPage(
    pageNumber
) {

    if (!pdfDoc)
        return;

    if (
        pageNumber < 1 ||
        pageNumber > totalPages
    )
        return;

    await renderPage(
        pageNumber
    );

}

window.goToPdfPage =
    goToPdfPage;

// =====================================
// KEYBOARD
// =====================================

document
    .addEventListener(
        "keydown",
        async (event)=>{

        if (!pdfDoc)
            return;

        if (
            event.key ===
            "ArrowRight"
        ) {

            if (
                currentPage <
                totalPages
            ) {

                await renderPage(
                    currentPage + 1
                );

            }

        }

        if (
            event.key ===
            "ArrowLeft"
        ) {

            if (
                currentPage > 1
            ) {

                await renderPage(
                    currentPage - 1
                );

            }

        }

    });

console.log(
    "PDF Viewer Ready"
);
