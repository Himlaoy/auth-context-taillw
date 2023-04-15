// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFAy3IboDIuI4C-aynKEWHlTLWMnZwsDQ",
  authDomain: "auth-firebase-context-taillwin.firebaseapp.com",
  projectId: "auth-firebase-context-taillwin",
  storageBucket: "auth-firebase-context-taillwin.appspot.com",
  messagingSenderId: "1066817817685",
  appId: "1:1066817817685:web:b0a30cf8b81b2b014018dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;