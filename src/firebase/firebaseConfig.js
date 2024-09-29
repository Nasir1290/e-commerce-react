// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-za2qHDmLB0E8ITpbPGt1cerQHcBl87Y",
  authDomain: "online-sh0pping.firebaseapp.com",
  projectId: "online-sh0pping",
  storageBucket: "online-sh0pping.appspot.com",
  messagingSenderId: "78423114307",
  appId: "1:78423114307:web:4ac3d7626b546af7c08af6",
  measurementId: "G-EWMRJFZD6E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
