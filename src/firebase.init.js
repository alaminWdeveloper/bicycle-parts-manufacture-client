// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx8N1YqKyiznmM_NJUvmFjzZTZ6ia8F4k",
    authDomain: "bicycle-parts-manufactur-a6086.firebaseapp.com",
    projectId: "bicycle-parts-manufactur-a6086",
    storageBucket: "bicycle-parts-manufactur-a6086.appspot.com",
    messagingSenderId: "914256803620",
    appId: "1:914256803620:web:b4b665adcbb68f034025b1"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const auth = getAuth( app );

export default auth;