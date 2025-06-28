// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REMOVED,
  authDomain: process.env.REMOVED,
  projectId: process.env.REMOVED,
  storageBucket: process.env.REMOVED,
  messagingSenderId: process.env.REMOVED,
  appId: process.env.REMOVED,
  measurementId: process.env.REMOVED
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);