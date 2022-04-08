// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxfJJYe23-AX-pVxKZq6w72BNRmjvUcL0",
  authDomain: "email-password-auth-b42a6.firebaseapp.com",
  projectId: "email-password-auth-b42a6",
  storageBucket: "email-password-auth-b42a6.appspot.com",
  messagingSenderId: "20665754221",
  appId: "1:20665754221:web:7cff96f8bf4fbdff70d564"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;