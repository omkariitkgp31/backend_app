// Google OAuth Configuration for Firebase
// Note: Google OAuth is now handled through Firebase Auth
// The client ID and secret are configured in Firebase Console

// Import Firebase auth and Google provider
import { auth, googleProvider, signInWithPopup } from './firebase';

// Google Sign-in function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw error;
  }
};

// Export auth instance for use in other components
export { auth, googleProvider };
