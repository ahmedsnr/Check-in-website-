import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJlfMMkHqQuSd_opEM8Xcpbdc8RgmeiPA",
  authDomain: "checkin-website-2cc92.firebaseapp.com",
  projectId: "checkin-website-2cc92",
  storageBucket: "checkin-website-2cc92.firebasestorage.app",
  messagingSenderId: "1039683761888",
  appId: "1:1039683761888:web:9e278f9c77e15d4fee4285"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
