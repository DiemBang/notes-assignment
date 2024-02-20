import { printDocs } from "./printDocs.js";
import { showCreateNewDocBtn, showNewTextAreaAndSaveButton } from "./newDoc.js";

let loginForm = document.getElementById("loginForm");
let newDoc = document.getElementById("newDoc");
let docList = document.getElementById("docList");

function printLoginForm() {
    loginForm.innerHTML = "";
    let inputUsername = document.createElement("input");
    inputUsername.placeholder = "Username";
    let inputPassword = document.createElement("input");
    inputPassword.placeholder = "Password";
    inputPassword.type = "password";
    let loginBtn = document.createElement("button");
    loginBtn.innerText = "Log in";
  
    loginBtn.addEventListener("click", () => {
      let sendUser = { username: inputUsername.value, password: inputPassword.value };
  
      fetch("http://localhost:3000/users/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(sendUser)
      })
      .then(res => res.json()) 
      .then(data => {
          console.log("post user", data);
  
          if (data.username) {
              localStorage.setItem("user", data.username);
              handleUserLoggedIn();
          } else {
              alert("Fel inlogg");
          }
      })
    });
  
    loginForm.append(inputUsername, inputPassword, loginBtn);
};

function handleUserLoggedIn() {
    printLogoutBtn();
    printDocs(); // temporary, swap for print docs for specific user
    showCreateNewDocBtn();
};

function handleUserLoggedOut() {
    newDoc.innerHTML = "";
    docList.innerHTML = "";
    printLoginForm();
};

function printLogoutBtn() {
    loginForm.innerHTML = "";

    let logoutBtn = document.createElement("button");
    logoutBtn.innerText = "Log out";

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        handleUserLoggedOut();
    })

    loginForm.appendChild(logoutBtn);

};


export { printLoginForm, printLogoutBtn, handleUserLoggedIn };
