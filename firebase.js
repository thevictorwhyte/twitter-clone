// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh00h-aUzxu8Vg4G44J5n6TuaDoUIJgDw",
  authDomain: "twitter-clone-139b9.firebaseapp.com",
  projectId: "twitter-clone-139b9",
  storageBucket: "twitter-clone-139b9.appspot.com",
  messagingSenderId: "502659270631",
  appId: "1:502659270631:web:2a33032c03e73e1de51f42",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
