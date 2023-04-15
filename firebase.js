// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v4-d585e.firebaseapp.com",
  projectId: "twitter-v4-d585e",
  storageBucket: "twitter-v4-d585e.appspot.com",
  messagingSenderId: "147042784479",
  appId: "1:147042784479:web:cfc91c075cce704955456a"
};

// Initialize Firebase
const app=!getApps().length ? initializeApp(firebaseConfig) : getApp()
const db=getFirestore()
const storage = getStorage()

export {app,db,storage}