// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH,
    projectId: import.meta.env.VITE_PROJECT,
    storageBucket: import.meta.env.VITE_STORAGE, 
    messagingSenderId: import.meta.env.VITE_MSJ,
    appId: import.meta.env.VITE_APP_ID
};*/
const firebaseConfig = {
  apiKey: "AIzaSyD9QQagU96fNu9exWyxQKwDow79UO9arV0",
  authDomain: "react-palod.firebaseapp.com",
  projectId: "react-palod",
  storageBucket: "react-palod.firebasestorage.app",
  messagingSenderId: "1043856595269",
  appId: "1:1043856595269:web:ec740824dcc09217dc862c"
};
///////hay que cambiar todo esto por las variables de entorno


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

