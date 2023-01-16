// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyqbCWuxolg2zccRptUYXugQ8addWR_QA",
  authDomain: "chatapp-4dcf8.firebaseapp.com",
  projectId: "chatapp-4dcf8",
  storageBucket: "chatapp-4dcf8.appspot.com",
  messagingSenderId: "996011587224",
  appId: "1:996011587224:web:b0f8180ac3176954a1c2ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);