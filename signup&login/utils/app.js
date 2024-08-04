import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth,
 onAuthStateChanged,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {  getFirestore,
         getDoc,
         getDocs,
         doc,
         setDoc,
         collection,
         addDoc,
         query,
         where
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {  getStorage,
   ref,
   uploadBytes,
   getDownloadURL
 } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

 const firebaseConfig = {
  apiKey: "AIzaSyCJiwRze8Ak3ummNj6hzdIQBGHLNZ3jmD8",
  authDomain: "user-athentication-74d8a.firebaseapp.com",
  projectId: "user-athentication-74d8a",
  storageBucket: "user-athentication-74d8a.appspot.com",
  messagingSenderId: "518655560395",
  appId: "1:518655560395:web:f747c1b4f223097b74294e",
  measurementId: "G-HY009MXTNK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
export { auth,
 app,
 db,
 storage,
 onAuthStateChanged,
 createUserWithEmailAndPassword,
 getDoc,
 doc,
 ref,
 uploadBytes,
 getDownloadURL,
 setDoc,
 addDoc,
 getDocs,
 collection,
 signInWithEmailAndPassword,
 signOut,
 query,
 where
};