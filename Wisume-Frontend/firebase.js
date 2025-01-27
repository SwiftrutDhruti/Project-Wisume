// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj2BUjIkkrgd-zsg9hhSJZ205mpOE-DXc",
  authDomain: "project-wisume.firebaseapp.com",
  projectId: "project-wisume",
  storageBucket: "project-wisume.firebasestorage.app",
  messagingSenderId: "14923409189",
  appId: "1:14923409189:web:b0f36339923aaa89979ccc",
  measurementId: "G-R5JGQ9K190"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);