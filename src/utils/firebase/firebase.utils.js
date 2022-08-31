import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLZRBszR88qSMqLyITH1rmslVkAiu41mo",
  authDomain: "crown-clothing-db-321fe.firebaseapp.com",
  projectId: "crown-clothing-db-321fe",
  storageBucket: "crown-clothing-db-321fe.appspot.com",
  messagingSenderId: "238980490913",
  appId: "1:238980490913:web:6d2675b564de883f52b2e0",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
