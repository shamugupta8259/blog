/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "mern-blog-1238d.firebaseapp.com",
	projectId: "mern-blog-1238d",
	storageBucket: "mern-blog-1238d.appspot.com",
	messagingSenderId: "840826320244",
	appId: "1:840826320244:web:2e24ff3611d30e841b6821",
	measurementId: "G-B7KVRRSTSX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
