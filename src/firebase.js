// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCukxoP_THh1QTJV7nqNTp7Yx6Gw72gCpo",
  authDomain: "synergy-sphere-471303.firebaseapp.com",
  projectId: "synergy-sphere-471303",
  storageBucket: "synergy-sphere-471303.firebasestorage.app",
  messagingSenderId: "386298217689",
  appId: "1:386298217689:web:9b190b5b3f57810b526ac8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
