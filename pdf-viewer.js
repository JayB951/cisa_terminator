// =====================================
// PDF VIEWER
// =====================================

pdfjsLib.GlobalWorkerOptions.workerSrc =
    "pdfjs/pdf.worker.min.js";

// =====================================
// STATE
// =====================================

let pdfDocument = null;
let currentPage = 1;
let totalPages = 0;
let rendering = false;

const canvas =
    document.getElementById("pdfCanvas");

const ctx =
    canvas.getContext("2d");

// =====================================
// LOAD PDF
// =====================================

document
    .getElementById("loadPdfBtn")
    .addEventListener(
        "click",
        loadPdf
    );

async function loadPdf() {

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

        const arrayBuffer =
            await file.arrayBuffer();

        pdfDocument =
            await pdfjsLib
                .getDocument({
                    data: arrayBuffer
                })
                .promise;

        totalPages =
            pdfDocument.numPages;

        currentPage = 1;

        renderPage(currentPage);

        console.log(
            "PDF loaded:",
            totalPages,
            "pages"
        );

    }
    catch (err) {

        console.error(err);

        alert(
            "PDF megnyitási hiba."
        );

    }
}

// =====================================
// RENDER PAGE
// =====================================

async function renderPage(pageNumber) {

    if (!pdfDocument)
        return;

    rendering = true;

    const page =
        await pdfDocument.getPage(
            pageNumber
        );

    const viewport =
        page.getViewport({
            scale: 1.4
        });

    canvas.width =
        viewport.width;

    canvas.height =
        viewport.height;

    await page.render({

        canvasContext: ctx,
        viewport: viewport

    }).promise;

    currentPage =
        pageNumber;

    rendering = false;

    updatePageInfo();
}

// =====================================
// PAGE INFO
// =====================================

function updatePageInfo() {

    document
        .getElementById("pageInfo")
        .innerText =
        `Page ${currentPage} / ${totalPages}`;
}

// =====================================
// NEXT PAGE
// =====================================

document
    .getElementById("nextPageBtn")
    .addEventListener(
        "click",
        async () => {

        if (!pdfDocument)
            return;

        if (
            currentPage >=
            totalPages
        )
            return;

        await renderPage(
            currentPage + 1
        );

    });

// =====================================
// PREVIOUS PAGE
// =====================================

document
    .getElementById("prevPageBtn")
    .addEventListener(
        "click",
        async () => {

        if (!pdfDocument)
            return;

        if (
            currentPage <= 1
        )
            return;

        await renderPage(
            currentPage - 1
        );

    });

// =====================================
// EXTERNAL NAVIGATION
// =====================================

async function goToPdfPage(pageNumber) {

    if (!pdfDocument)
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

// =====================================
// KEYBOARD NAVIGATION
// =====================================

document
    .addEventListener(
        "keydown",
        async (event) => {

        if (!pdfDocument)
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

// =====================================
// PUBLIC API
// =====================================

window.goToPdfPage =
    goToPdfPage;
