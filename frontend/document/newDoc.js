import { printDocs } from "./printDocs.js";

let newDoc = document.getElementById("newDoc");
let saveNewDocBtn = document.getElementById("saveNewDocBtn");

newDoc.addEventListener("click", () => {
  console.log("click");
  showNewTextAreaAndSaveButton();
});

function showNewTextAreaAndSaveButton() {
  let newDocTextArea = document.getElementById("newDocTextArea");

  newDocTextArea.innerHTML = `
    <div>Title</div>
    <input type="text" id="newDocTitle"><br>
    <textarea id="newDocContent"></textarea>
    `;

  let saveBtn = document.createElement("button");
  saveBtn.id = "saveBtn";
  saveBtn.innerText = "Save";
  newDocTextArea.appendChild(saveBtn);

  saveBtn.addEventListener("click", () => {
    createNewDoc();
  });
}

export default function createNewDoc() {
  let newDocTitle = document.getElementById("newDocTitle");
  let newDocContent = document.getElementById("newDocContent");

  let saveDoc = {
    name: newDocTitle.value,
    content: newDocContent.value,
    user: 1
  };

  fetch("http://localhost:3000/documents/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(saveDoc),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("new doc", data);
      printDocs();
    });
}
