// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcWJp037KbxUVcfyIOsGImVLkAeMoJ7AY",
  authDomain: "podcast-platform-af94c.firebaseapp.com",
  projectId: "podcast-platform-af94c",
  storageBucket: "podcast-platform-af94c.appspot.com",
  messagingSenderId: "873088245310",
  appId: "1:873088245310:web:6b6ae7b22a5ad0c87ebb6f",
  measurementId: "G-C1SJK35HK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };