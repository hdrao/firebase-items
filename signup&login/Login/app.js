import {
    auth,
    signInWithEmailAndPassword
} from"/utils/app.js"

let email = document.querySelector(".email");
let button = document.querySelector("button");
let password = document.querySelector(".password");
button.addEventListener("click", (e)=> {
  e.preventDefault();
  signInWithEmailAndPassword(auth,email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href="/main/index.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}) 