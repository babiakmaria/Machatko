import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4h4qECNysAd0lCqV2nsYadgSquu2DK8M",
  authDomain: "machatko-b1d0c.firebaseapp.com",
  projectId: "machatko-b1d0c",
  storageBucket: "machatko-b1d0c.firebasestorage.app",
  messagingSenderId: "302433739531",
  appId: "1:302433739531:web:fcf0e4765b45b0a340b80e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;