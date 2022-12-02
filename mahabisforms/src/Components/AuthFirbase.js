// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBN_zIzyVnOG4KjFfR-1JqifDaqTEXoE6I",
    authDomain: "mahabisclone.firebaseapp.com",
    projectId: "mahabisclone",
    storageBucket: "mahabisclone.appspot.com",
    messagingSenderId: "257008409826",
    appId: "1:257008409826:web:1e7f380a01b8f8aa5cd2bb",
    measurementId: "G-QGCRBPS8H6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const webAuth = getAuth(app);