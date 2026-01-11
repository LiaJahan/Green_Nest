// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPThrYM1JMEcUmTUcr8KHwQxVhxgmpQC0",
  authDomain: "green-nest-3928f.firebaseapp.com",
  projectId: "green-nest-3928f",
  storageBucket: "green-nest-3928f.appspot.com",
  messagingSenderId: "829236393944",
  appId: "1:829236393944:web:970e6ffb4729292ee424ad",
  measurementId: "G-V2BN6ENH17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
