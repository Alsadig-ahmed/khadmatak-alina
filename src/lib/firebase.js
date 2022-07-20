// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP_v7B-dVDOBaaJh1Dlz4PNO-P4TbV-wA",
  authDomain: "alina-go.firebaseapp.com",
  projectId: "alina-go",
  storageBucket: "alina-go.appspot.com",
  messagingSenderId: "656424437808",
  appId: "1:656424437808:web:c1c7b933901162cd4185f5",
  measurementId: "G-1BJTLFZ1GX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
