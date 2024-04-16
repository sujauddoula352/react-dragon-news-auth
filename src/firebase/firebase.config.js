// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALleunl-RakYiNQtuHLKIFZTYmugaYO7c",
  authDomain: "react-dragon-news-auth-3caaa.firebaseapp.com",
  projectId: "react-dragon-news-auth-3caaa",
  storageBucket: "react-dragon-news-auth-3caaa.appspot.com",
  messagingSenderId: "260247438399",
  appId: "1:260247438399:web:b1dfa3d414d751559d248a",
  measurementId: "G-WR4L6SYYVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;