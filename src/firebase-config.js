import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV1ES5bI9vjdt_uw7T38tRW90J6wfZssI",
  authDomain: "blogs-31669.firebaseapp.com",
  projectId: "blogs-31669",
  storageBucket: "blogs-31669.appspot.com",
  messagingSenderId: "755671766456",
  appId: "1:755671766456:web:bad0cae5f42038d134ab4d",
  measurementId: "G-LTT8VWXJDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
