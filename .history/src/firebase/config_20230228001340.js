import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.,
  authDomain: "ecommerce-2a761.firebaseapp.com",
  projectId: "ecommerce-2a761",
  storageBucket: "ecommerce-2a761.appspot.com",
  messagingSenderId: "772629496810",
  appId: "1:772629496810:web:1418731f6432b27310e893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
