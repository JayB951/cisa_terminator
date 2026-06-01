// =====================================
// PDF VIEWER
// =====================================

let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;
let currentScale = 1.25;

const canvas =
    document.getElementById("pdfCanvas");

const ctx =
    canvas.getContext("2d");

// =====================================
// PDF.JS BETÖLTÉS
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
// PDF BETÖLTÉS
// =====================================

document
    .getElementById("loadPdfBtn")
    .addEventListener(
        "click",
        openPdf
    );

async function openPdf() {

    const file =
        document
        .getElementById("pdfFile")
        .files[0];

    if (!file) {

        alert(
            "Válassz PDF fájlt."
        );

        return;
    }

    try {

        const buffer =
            await file.arrayBuffer();

        pdfDoc =
            await pdfjsLib
                .getDocument({
                    data: buffer
                })
                .promise;

        totalPages =
            pdfDoc.numPages;

        currentPage = 1;

        renderPage(
            currentPage
        );

        console.log(
            "Loaded pages:",
            totalPages
        );

    }
    catch (err) {

        console.error(err);

        alert(
            "Nem sikerült megnyitni a PDF-et."
        );

    }

}

// =====================================
// PAGE RENDER
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
            scale: currentScale
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

}

// =====================================
// NEXT
// =====================================

document
    .getElementById(
        "nextPageBtn"
    )
    .addEventListener(
        "click",
        () => {

        if (
            currentPage <
            totalPages
        ) {

            renderPage(
                currentPage + 1
            );

        }

    });

// =====================================
// PREVIOUS
// =====================================

document
    .getElementById(
        "prevPageBtn"
    )
    .addEventListener(
        "click",
        () => {

        if (
            currentPage > 1
        ) {

            renderPage(
                currentPage - 1
            );

        }

    });

// =====================================
// NAVIGATION API
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
// ZOOM API
// =====================================

async function zoomIn() {

    currentScale += 0.15;

    await renderPage(
        currentPage
    );

}

async function zoomOut() {

    currentScale -= 0.15;

    if (
        currentScale < 0.5
    ) {

        currentScale = 0.5;

    }

    await renderPage(
        currentPage
    );

}

window.zoomIn =
    zoomIn;

window.zoomOut =
    zoomOut;

// =====================================
// KEYBOARD
// =====================================

document.addEventListener(
    "keydown",
    event => {

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

            renderPage(
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

            renderPage(
                currentPage - 1
            );

        }

    }

});
