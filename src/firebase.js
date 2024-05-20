// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, reauthenticateWithCredential } from "firebase/auth";
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, query, where, onSnapshot, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5lOfUgT4ySv9Ej9X5oAtKE6q4sajDLuc",
  authDomain: "tngaccounts.firebaseapp.com",
  projectId: "tngaccounts",
  storageBucket: "tngaccounts.appspot.com",
  messagingSenderId: "823789930712",
  appId: "1:823789930712:web:7f8ffcde3060b319d96fad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  reauthenticateWithCredential,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  setDoc
};