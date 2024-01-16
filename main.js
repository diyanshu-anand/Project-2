// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuTer27Es4uM8gxb3Lu7Te6UhXp7I27Sw",
  authDomain: "gradientclasses-a2fd1.firebaseapp.com",
  projectId: "gradientclasses-a2fd1",
  storageBucket: "gradientclasses-a2fd1.appspot.com",
  messagingSenderId: "657191030524",
  appId: "1:657191030524:web:8e5316725efa243e731179",
  measurementId: "G-VH1XNKZCBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);