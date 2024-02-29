import { printDocs, printSpecificDoc } from "./printDocs.js";

let viewDoc = document.getElementById("viewDoc");
let savedMessage = document.getElementById("savedMessage");

function saveEdits(sendUpdatedDoc) {
  console.log("saveEdits");

  console.log("edit doc", sendUpdatedDoc.id);

  fetch("http://localhost:3000/documents/" + sendUpdatedDoc.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendUpdatedDoc),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("saved", data);
      // Add saved message
      let savedConfirmationMessage = document.createElement("div");
      savedConfirmationMessage.id = "savedConfirmationMessage";
      savedConfirmationMessage.innerText = "Your changes have been saved";
      savedMessage.appendChild(savedConfirmationMessage);
      printSpecificDoc(sendUpdatedDoc.id);
    });
}

function editDoc(doc) {
  console.log("editing doc");
  // Add edit view
  let textArea = document.createElement("textarea");
  textArea.id = "editTextContent";
  textArea.innerText = doc.content;
  viewDoc.appendChild(textArea);

  tinymce.init({
    selector: "textarea#editTextContent",
    plugins: "code",
    toolbar:
      "undo redo | forecolor backcolor | styleselect bold italic | alignleft aligncenter alignright | code",

    setup: function (editor) {
      editor.on("change", function () {
        editor.save();
      });
    },
  });

  // Add save edits button
  let saveChangesBtn = document.createElement("button");
  saveChangesBtn.id = "saveChangesBtn";
  saveChangesBtn.innerText = "Save edits";
  viewDoc.appendChild(saveChangesBtn);
  viewDoc.removeChild(deleteDocBtn);
  viewDoc.removeChild(editDocBtn);

  saveChangesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("edits saved");

    let sendUpdatedDoc = {
      id: doc.id,
      user: doc.user,
      name: doc.name,
      content: textArea.value,
    };
    saveEdits(sendUpdatedDoc);
    savedMessage.innerHTML = "";
  });
}

export { saveEdits, editDoc };
