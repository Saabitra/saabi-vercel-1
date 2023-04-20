import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7lwpsCci5vOGoFNMtA0tkP4do_kSTklQ",
  authDomain: "saabi-vercel.firebaseapp.com",
  projectId: "saabi-vercel",
  storageBucket: "saabi-vercel.appspot.com",
  messagingSenderId: "207183898392",
  appId: "1:207183898392:web:135aeaa19c2696e4d3e06d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };