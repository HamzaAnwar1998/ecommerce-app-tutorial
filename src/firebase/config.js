import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi2qL5rxz17Uno8RAR2Lk58JPz8FyXb9g",
  authDomain: "ecommerce-app-tutorial-6f68a.firebaseapp.com",
  projectId: "ecommerce-app-tutorial-6f68a",
  storageBucket: "ecommerce-app-tutorial-6f68a.appspot.com",
  messagingSenderId: "810539097605",
  appId: "1:810539097605:web:56cf7915d24eedcfaec66c",
  measurementId: "G-C3E5Q4ZVFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
