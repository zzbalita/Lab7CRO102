// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHZwzrKw7UsSTwYHCowMSTfHg_j0y-Yro",
  authDomain: "flutter-840e9.firebaseapp.com",
  projectId: "flutter-840e9",
  storageBucket: "flutter-840e9.firebasestorage.app",
  messagingSenderId: "262210656625",
  appId: "1:262210656625:web:93d445eee184e0869dbed0",
  measurementId: "G-ZW6N88K8TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)

