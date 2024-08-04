import {
    createUserWithEmailAndPassword,
    storage,
    auth,
 app,
 db,
 onAuthStateChanged,
 getDoc,
 doc,
 ref,
 uploadBytes,
 getDownloadURL,
 setDoc,
 addDoc,
 getDocs,
 collection,
 signInWithEmailAndPassword
} from "/utils/app.js"


let file = document.querySelector(".file");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let button = document.querySelector("button");


button.addEventListener("click", (e) => {
  e.preventDefault();

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
  
    const user = userCredential.user;

    let photo = file.files[0];
    const storageref = ref(storage, `${photo.name}`);
    uploadBytes(storageref, photo).then((snapshot) => {
      console.log(snapshot);
      console.log("uploded");
  
      getDownloadURL(storageref).then((url)=>{
        let img = url;
        console.log(img);
        if (url) {
          let dbref = doc(db,"users", user.uid)
          let userInfoobj = {
            email: user.email,
            photoURL: img,
            timestamp: new Date()
          }
        setDoc(dbref,userInfoobj).then(()=>{
          window.location.href="../Login/index.html";
        })
      }
      })
    })
    // setTimeout( ()=>{
    //   window.location.href="/Login/index.html";
    // },15000)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})