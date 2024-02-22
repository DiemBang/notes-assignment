import { printLoginForm, handleUserLoggedIn, handleUserLoggedOut } from "./document/printLogin.js";

//Init functions
if (localStorage.getItem("user")) {
    // LOGGED IN
    handleUserLoggedIn();
  } else {
    // NOT LOGGED IN
    handleUserLoggedOut();
};



