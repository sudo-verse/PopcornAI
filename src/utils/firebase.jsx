// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOdsvPeS-jzY9AUuEaMzhomomths4gGik",
  authDomain: "netflixgpt-b2653.firebaseapp.com",
  projectId: "netflixgpt-b2653",
  storageBucket: "netflixgpt-b2653.firebasestorage.app",
  messagingSenderId: "865967754489",
  appId: "1:865967754489:web:213290e1f530ed1fbee628",
  measurementId: "G-LB080E4Z33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
