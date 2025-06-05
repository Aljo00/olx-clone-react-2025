import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkL8ZMdx_BGl2PiQPFTCY0JE3iIsGPoyA",
  authDomain: "olx-react-clone-c8bd7.firebaseapp.com",
  projectId: "olx-react-clone-c8bd7",
  storageBucket: "olx-react-clone-c8bd7.appspot.com",
  messagingSenderId: "32127549495",
  appId: "1:32127549495:web:198c3e0a61f3919d39bfb2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();