// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5fq5OQGCkZ1OxWk412TLQfy92KSaiMjQ",
  authDomain: "my-netfilx-gpt.firebaseapp.com",
  projectId: "my-netfilx-gpt",
  storageBucket: "my-netfilx-gpt.appspot.com",
  messagingSenderId: "30689191560",
  appId: "1:30689191560:web:22585b1f2608afbacb613d",
  measurementId: "G-K626X9D0M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();