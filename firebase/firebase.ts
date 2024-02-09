// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBJzpYdXY6AtX4-j-fp7Z_LDWrKVdY9f0",
    authDomain: "portfolio-tintin-72afe.firebaseapp.com",
    projectId: "portfolio-tintin-72afe",
    storageBucket: "portfolio-tintin-72afe.appspot.com",
    messagingSenderId: "651948637636",
    appId: "1:651948637636:web:14d007b16f95a777603891",
    measurementId: "G-3P8CGNRHD7"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app, "gs://portfolio-tintin-72afe.appspot.com");

export { app, firestore,storage};