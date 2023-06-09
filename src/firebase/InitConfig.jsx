import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgcX8cb98HkRLw79EH8cmf0iZ8NemSOZE",
  authDomain: "libreria-6ed65.firebaseapp.com",
  projectId: "libreria-6ed65",
  storageBucket: "libreria-6ed65.appspot.com",
  messagingSenderId: "482930591667",
  appId: "1:482930591667:web:2e5fbf6e8dfda59af5edc6",
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);