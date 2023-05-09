// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFDOjV6bu7ScP72XFYOSEUnk7X1XoTaQE",
  authDomain: "clone-ac67e.firebaseapp.com",
  projectId: "clone-ac67e",
  storageBucket: "clone-ac67e.appspot.com",
  messagingSenderId: "703921231918",
  appId: "1:703921231918:web:42f17c09cf81db314467bf",
  measurementId: "G-4XPPZL5ZHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, auth, provider };
