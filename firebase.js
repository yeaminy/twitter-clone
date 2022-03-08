// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLGewc-axA9G1qNYVki8Ktyjtkxq_XBVI',
  authDomain: 'twiter-clone-90753.firebaseapp.com',
  projectId: 'twiter-clone-90753',
  storageBucket: 'twiter-clone-90753.appspot.com',
  messagingSenderId: '729089624618',
  appId: '1:729089624618:web:416d825a09a8c63d121153',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
