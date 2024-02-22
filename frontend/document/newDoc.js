import { printDocs } from "./printDocs.js";

let newDoc = document.getElementById("newDoc");
let saveNewDocBtn = document.getElementById("saveNewDocBtn");
let newDocTextArea = document.getElementById("newDocTextArea");

function showCreateNewDocBtn() {
  newDoc.innerText = "Create new doc";
  
  newDoc.addEventListener("click", () => {
    console.log("click");
    showNewTextAreaAndSaveButton();
  });
}

function showNewTextAreaAndSaveButton() {

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

function createNewDoc() {
  let newDocTitle = document.getElementById("newDocTitle");
  let newDocContent = document.getElementById("newDocContent");

  let saveDoc = {
    name: newDocTitle.value,
    content: newDocContent.value,
    user: localStorage.getItem("user"),
  };

  fetch("http://localhost:3000/documents/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(saveDoc),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("new doc", data);
      printDocs();
      removeNewTextArea();
    });
}

function removeNewTextArea() {
  newDocTextArea.innerHTML = "";
}

export { showNewTextAreaAndSaveButton, createNewDoc, showCreateNewDocBtn };