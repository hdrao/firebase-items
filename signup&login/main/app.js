import {
    auth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    getDoc,
    doc,
    ref,
    uploadBytes,
    db,
    collection,
    query,
    where
} from "../utils/app.js"
let logout = document.querySelector(".logout");
logout.addEventListener("click", ()=> {
  signOut(auth)
   .then(() => {
      console.log("User signed out!");
    })
   .catch((error) => {
      console.error("Error signing out:", error);
    });
 });


  

onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      let currentUser = auth.currentUser.email;
      console.log(currentUser);
      getuserimg(uid);
    }
    else {
      window.location.href="../signup/index.html";
  }
  })

let userInfo = document.querySelector("#userimg");

function getuserimg (uid) {
    const userref = doc(db, "users", uid);
    getDoc(userref).then( (data)=>{
      const userimg =  data.data().photoURL;
      userInfo.src = userimg;
    })
}