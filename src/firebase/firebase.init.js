// Do not store config on the client side
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoVc9Uilovn5os7854QwPuZxP1M_os1ow",
  authDomain: "simple-firebase-2-9c3a3.firebaseapp.com",
  projectId: "simple-firebase-2-9c3a3",
  storageBucket: "simple-firebase-2-9c3a3.firebasestorage.app",
  messagingSenderId: "118524665706",
  appId: "1:118524665706:web:aaae1b66dfb4b78bbb0f13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;