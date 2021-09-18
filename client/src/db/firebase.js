import firebase from 'firebase/compat/app';
import {child , ref, set, getDatabase, onValue, get} from'firebase/database'
import {getAuth ,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyClbykQKn2Gapi9xIDTFvF-uTBEeFXI4rg",
    authDomain: "pirate-hack-a-thon.firebaseapp.com",
    projectId: "pirate-hack-a-thon",
    storageBucket: "pirate-hack-a-thon.appspot.com",
    messagingSenderId: "624766249967",
    appId: "1:624766249967:web:35b0ff55c836785da3a41a",
    measurementId: "G-8SH6N67PR8"
  });

export const authentication = getAuth(app);
export const db = getDatabase(app)
export {child ,get ,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, ref, set, onValue}