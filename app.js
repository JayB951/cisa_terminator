const uploadBtn = document.getElementById("uploadBtn");
const pdfUpload = document.getElementById("pdfUpload");
const documentList = document.getElementById("documentList");

let documents = JSON.parse(
    localStorage.getItem("documents") || "[]"
);

renderDocuments();

uploadBtn.addEventListener("click", () => {

    const file = pdfUpload.files[0];

    if (!file) {
        alert("Select a PDF first.");
        return;
    }

    const documentData = {
        id: Date.now(),
        name: file.name,
        uploadedAt: new Date().toISOString()
    };

    documents.push(documentData);

    localStorage.setItem(
        "documents",
        JSON.stringify(documents)
    );

    renderDocuments();

    alert("Document added.");
});

function renderDocuments() {

    if(documents.length === 0){
        documentList.innerHTML =
            "<li>No document uploaded</li>";
        return;
    }

    documentList.innerHTML = "";

    documents.forEach(doc => {

        const li = document.createElement("li");

        li.textContent = doc.name;

        documentList.appendChild(li);

    });

}
