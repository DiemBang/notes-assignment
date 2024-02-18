export default function createDoc() {
    fetch("http://localhost:3000/documents/new")
    .then(res => res.json())
    .then(data => {
        console.log("new doc", data);
    })
}