// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-todo-firebase-app-ac529.firebaseapp.com",
  projectId: "react-todo-firebase-app-ac529",
  storageBucket: "react-todo-firebase-app-ac529.appspot.com",
  messagingSenderId: "597843641310",
  appId: "1:597843641310:web:fce4cc63857d5bfae7934f",
  measurementId: "G-KPWYX320M1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
