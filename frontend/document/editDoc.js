import { printDocs, printSpecificDoc } from "./printDocs.js";

let viewDoc = document.getElementById("viewDoc");
let savedMessage = document.getElementById("savedMessage");

function saveEdits(documentId) {
  console.log("saveEdits");

  console.log("edit doc", documentId);

  fetch("http://localhost:3000/documents/" + documentId, {
    method: "PATCH",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("saved", data);
      // Add saved message
      let savedConfirmationMessage = document.createElement("div");
      savedConfirmationMessage.id = "savedConfirmationMessage";
      savedConfirmationMessage.innerText = "Your changes have been saved";
      savedMessage.appendChild(savedConfirmationMessage);
      printSpecificDoc(documentId);
    });
};

function editDoc(documentID, docContent) {
  console.log("editing doc");
  // Add edit view
  let textArea = document.createElement("textarea");
  textArea.innerText = docContent;
  viewDoc.appendChild(textArea);
  // Add save edits button
  let saveChangesBtn = document.createElement("button");
  saveChangesBtn.addEventListener("click", () => {
    console.log("edits saved");
  });

  saveChangesBtn.id = "saveChangesBtn";
  saveChangesBtn.innerText = "Save edits";
  viewDoc.appendChild(saveChangesBtn);
  viewDoc.removeChild(deleteDocBtn);
  viewDoc.removeChild(editDocBtn);

  saveChangesBtn.addEventListener("click", () => {
    console.log("edits saved");
    saveEdits(documentID);
  });
};

export { saveEdits, editDoc };
