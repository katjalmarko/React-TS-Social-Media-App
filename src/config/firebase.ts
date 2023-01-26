// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-typescript-redux-app.firebaseapp.com",
  projectId: "react-typescript-redux-app",
  storageBucket: "react-typescript-redux-app.appspot.com",
  messagingSenderId: "474773218967",
  appId: "1:474773218967:web:2d92a6ebfd7c5e20eeabd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)