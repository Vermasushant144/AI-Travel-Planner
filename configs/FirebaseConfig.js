// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk4NPluBaSPG-e4N8Gqqv146qRdEP6MiE",
  authDomain: "cse-b25a0.firebaseapp.com",
  projectId: "cse-b25a0",
  storageBucket: "cse-b25a0.firebasestorage.app",
  messagingSenderId: "817822455352",
  appId: "1:817822455352:web:0881d6c96bd07a6776f8cd",
  measurementId: "G-MF7TL3ZH82"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);