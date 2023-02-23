// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTr_v9KxfsFSMsz0ORqT8UuTvy2htdIRc",
  authDomain: "to-do-project-b00d1.firebaseapp.com",
  projectId: "to-do-project-b00d1",
  storageBucket: "to-do-project-b00d1.appspot.com",
  messagingSenderId: "567838374748",
  appId: "1:567838374748:web:f65bcad4ac63d64ee5df99",
  measurementId: "G-D023CN41PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);