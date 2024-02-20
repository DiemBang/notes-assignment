import { printDocs } from "./document/printDocs.js";
import newDoc from "./document/newDoc.js";
import { printLoginForm, printLogoutBtn } from "./document/printLogin.js";

//Init functions
if (localStorage.getItem("user")) {
    // LOGGED IN
    printLogoutBtn();
  } else {
    // NOT LOGGED IN
    printLoginForm();
};

printDocs();