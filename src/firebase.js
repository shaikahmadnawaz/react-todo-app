// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-todo-firebase-app-2b719.firebaseapp.com",
  projectId: "react-todo-firebase-app-2b719",
  storageBucket: "react-todo-firebase-app-2b719.appspot.com",
  messagingSenderId: "484854862073",
  appId: "1:484854862073:web:bb5b365fb08f99eaf19228",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
