// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  signInWithEmailLink, 
  sendSignInLinkToEmail, 
  isSignInWithEmailLink,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  connectAuthEmulator
} from "firebase/auth";
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
const auth = getAuth(app);

// Connect to emulators in development
if (process.env.NODE_ENV === 'development') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099');
    console.log('Connected to Firebase Auth Emulator');
  } catch (error) {
    console.log('Auth emulator already connected or not available');
  }
}

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Export the app instance and auth functions for use in other files
export { 
  app, 
  analytics, 
  auth, 
  googleProvider,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithPopup,
  onAuthStateChanged,
  signOut
};