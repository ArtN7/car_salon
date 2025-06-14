// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";
import { getDatabase, ref, set, child, update, remove, query, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD02uzTqfUQnxDf8VGOR1XZuuBBcWbOK_0",
  authDomain: "carsalon4.firebaseapp.com",
  projectId: "carsalon4",
  storageBucket: "carsalon4.firebasestorage.app",
  messagingSenderId: "865082731574",
  appId: "1:865082731574:web:089d2b9051273d5f417c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(getAuth(app), email, password);
  }
  
export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(getAuth(app), email, password);
  }