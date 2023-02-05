// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZD-A4O-O0Z4d1PeKxhu3OYqztb43hFZo",
  authDomain: "tyblog-2e646.firebaseapp.com",
  projectId: "tyblog-2e646",
  storageBucket: "tyblog-2e646.appspot.com",
  messagingSenderId: "124483800186",
  appId: "1:124483800186:web:953ecba0408a3ab5103fc3",
  measurementId: "G-PFRYMRT56E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);