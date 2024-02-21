import { printDocs } from "./printDocs.js";
import { showCreateNewDocBtn, showNewTextAreaAndSaveButton } from "./newDoc.js";

let loginForm = document.getElementById("loginForm");
let newDoc = document.getElementById("newDoc");
let docList = document.getElementById("docList");
let myDocs = document.getElementById("myDocs");

function printLoginForm() {
    loginForm.innerHTML = "";
    let inputUsername = document.createElement("input");
    inputUsername.placeholder = "Username";
    let inputPassword = document.createElement("input");
    inputPassword.placeholder = "Password";
    inputPassword.type = "password";
    let loginBtn = document.createElement("button");
    loginBtn.id = "loginBtn";
    loginBtn.innerText = "Log in";
    let signUp = document.createElement("div");
    signUp.innerText = "Don't have an account yet?";
    let signUpLink = document.createElement("div");
    signUpLink.innerText = "Sign up now.";
  
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
  
          if (data.id) {
              localStorage.setItem("user", data.id);
              handleUserLoggedIn();
          } else {
              alert("Fel inlogg");
          }
      })
    });

    //add event listener to sign up now link
  
    loginForm.append(inputUsername, inputPassword, loginBtn, signUp, signUpLink);
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
    myDocs.innerHTML = "";
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


export { printLoginForm, printLogoutBtn, handleUserLoggedIn, handleUserLoggedOut };
