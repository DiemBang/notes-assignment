import deleteDoc from "./deleteDoc.js";
import { editDoc } from "./editDoc.js";

let docList = document.getElementById("docList");
let viewDoc = document.getElementById("viewDoc");
let myDocs = document.getElementById("myDocs");

function printDocs() {
  let sendUser = { user: localStorage.getItem("user") };
  console.log("sendUser", sendUser);
  fetch("http://localhost:3000/documents/user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("documents", data);

      docList.innerHTML = "";
      myDocs.innerText = "My documents"

      data.map((doc) => {
        let li = document.createElement("li");
        li.innerText = doc.name;

        docList.appendChild(li);

        li.addEventListener("click", () => {
          console.log("click");
          printSpecificDoc(doc.id);
        });
      });
    });
}

function printSpecificDoc(documentId) {
  console.log("printing document " + documentId);
  // fetch specific document
  fetch("http://localhost:3000/documents/" + documentId)
    .then((res) => res.json())
    .then((data) => {
      console.log("specific document", data);

      viewDoc.innerHTML = "";
      let docTitle = document.createElement("div");
      docTitle.id = "docTitle";
      docTitle.innerText = data.name;
      viewDoc.appendChild(docTitle);

      let docContent = document.createElement("div");
      docContent.id = "docContent";
      docContent.innerText = data.content;
      viewDoc.appendChild(docContent);

      let editDocBtn = document.createElement("button");
      editDocBtn.id = "editDocBtn";
      editDocBtn.innerText = "Edit";
      viewDoc.appendChild(editDocBtn);

      editDocBtn.addEventListener("click", () => {
        editDoc(data);
        viewDoc.removeChild(docContent);
      });

      let deleteDocBtn = document.createElement("button");
      deleteDocBtn.id = "deleteDocBtn";
      deleteDocBtn.innerText = "Delete";
      viewDoc.appendChild(deleteDocBtn);

      deleteDocBtn.addEventListener("click", () => {
        deleteDoc(data.id);
        viewDoc.innerHTML = "";
      });
    });
}

export { printDocs, printSpecificDoc };
