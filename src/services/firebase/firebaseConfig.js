// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3R_gzWQPaXmZFhW8_kYPa5nrOwDDN78I",
  authDomain: "la-madriguera-2dd5b.firebaseapp.com",
  projectId: "la-madriguera-2dd5b",
  storageBucket: "la-madriguera-2dd5b.appspot.com",
  messagingSenderId: "686691617712",
  appId: "1:686691617712:web:83cfa5b17149b1c347e475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);