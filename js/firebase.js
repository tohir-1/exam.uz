// Firebase configuration placeholder
// Replace with your own Firebase project config when ready

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export let app = null;
export let auth = null;
export let db = null;

export function initFirebase() {
  // Uncomment when firebase is installed and config is set:
  // import { initializeApp } from 'firebase/app';
  // import { getAuth } from 'firebase/auth';
  // import { getFirestore } from 'firebase/firestore';
  // app = initializeApp(firebaseConfig);
  // auth = getAuth(app);
  // db = getFirestore(app);
  console.info('Firebase demo mode — using localStorage');
  return false;
}