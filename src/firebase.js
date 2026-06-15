// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJlfMMkHqQuSd_opEM8Xcpbdc8RgmeiPA",
  authDomain: "checkin-website-2cc92.firebaseapp.com",
  projectId: "checkin-website-2cc92",
  storageBucket: "checkin-website-2cc92.firebasestorage.app",
  messagingSenderId: "1039683761888",
  appId: "1:1039683761888:web:9e278f9c77e15d4fee4285",
  measurementId: "G-5Z6P8FDTXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
