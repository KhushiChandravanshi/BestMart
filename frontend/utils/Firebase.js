import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "bestmart-a5f6c.firebaseapp.com",
  projectId: "bestmart-a5f6c",
  storageBucket: "bestmart-a5f6c.firebasestorage.app",
  messagingSenderId: "133151278964",
  appId: "1:133151278964:web:ec92afc1ecf690eaac8e21"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}