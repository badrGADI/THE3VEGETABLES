// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSBg5PhIMrVoEQV7ZtVI2Y5oMpFVGOuj4",
  authDomain: "the-3rocks.firebaseapp.com",
  databaseURL: "https://the-3rocks-default-rtdb.firebaseio.com",
  projectId: "the-3rocks",
  storageBucket: "the-3rocks.firebasestorage.app",
  messagingSenderId: "222458162737",
  appId: "1:222458162737:web:f30193d19e743e7f742f10",
  measurementId: "G-0QV4CTYT36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const db = getDatabase(app);

export default app;
