import { printDocs } from "./printDocs.js";
import { showCreateNewDocBtn, showNewTextAreaAndSaveButton } from "./newDoc.js";

let loginForm = document.getElementById("loginForm");
let newDoc = document.getElementById("newDoc");
let docList = document.getElementById("docList");
let myDocs = document.getElementById("myDocs");
let newDocTextArea = document.getElementById("newDocTextArea");
let viewDoc = document.getElementById("viewDoc");
let signUpForm = document.getElementById("signUpForm");
let signUpLink = document.getElementById("signUpLink");

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
  let signUpText = document.createElement("div");
  signUpText.innerText = "Don't have an account yet?";
  let signUpLink = document.createElement("div");
  signUpLink.innerText = "Sign up now.";

  loginBtn.addEventListener("click", () => {
    let sendUser = {
      username: inputUsername.value,
      password: inputPassword.value,
    };

    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("post user", data);

        if (data.id) {
          localStorage.setItem("user", data.id);
          handleUserLoggedIn();
        } else {
          alert("Fel inlogg");
        }
      });
  });

  signUpLink.addEventListener("click", () => {
    printSignUpFormAndCreateNewUserBtn();
    //loginForm.innerHTML = "";
  });

  loginForm.append(
    inputUsername,
    inputPassword,
    loginBtn,
    signUpText,
    signUpLink
  );
}

function printSignUpFormAndCreateNewUserBtn() {
  console.log("printSignUpFormAndCreateNewUserBtn");
  signUpForm.innerHTML = "";

  let inputName = document.createElement("input");
  inputName.placeholder = "Name";

  let inputUsername = document.createElement("input");
  inputUsername.placeholder = "Username";

  let inputPassword = document.createElement("input");
  inputPassword.placeholder = "Password";
  inputPassword.type = "password";

  let createNewUserBtn = document.createElement("button");
  createNewUserBtn.id = "createNewUserBtn";
  createNewUserBtn.innerText = "Create new user";

  createNewUserBtn.addEventListener("click", () => {
    console.log("click click");
    let newUser = {
        name: inputName.value,
        username: inputUsername.value,
        password: inputPassword.value
      };
    createNewUser(newUser);
  });

  signUpForm.append(inputName, inputUsername, inputPassword, createNewUserBtn);
};

function createNewUser(newUser) {
  
  console.log("create", newUser);

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("response from server", data);
      localStorage.setItem("user", data.id);
      handleUserLoggedIn();
    });
};

function handleUserLoggedIn() {
  printLogoutBtn();
  printDocs();
  showCreateNewDocBtn();
  signUpForm.innerHTML = "";
}

function handleUserLoggedOut() {
  newDoc.innerHTML = "";
  docList.innerHTML = "";
  printLoginForm();
  myDocs.innerHTML = "";
  newDocTextArea.innerHTML = "";
  viewDoc.innerHTML = "";
};

function printLogoutBtn() {
  loginForm.innerHTML = "";

  let logoutBtn = document.createElement("button");
  logoutBtn.innerText = "Log out";

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    handleUserLoggedOut();
  });

  loginForm.appendChild(logoutBtn);
};

export {
  printLoginForm,
  printLogoutBtn,
  handleUserLoggedIn,
  handleUserLoggedOut,
};
