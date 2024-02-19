import printDocs from "./printDocs.js";

export default function deleteDoc(documentId) {
    console.log("delete doc", documentId);

    fetch("http://localhost:3000/documents/" +documentId, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("deleted", data);
        printDocs();
    })
}