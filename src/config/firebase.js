import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAON0zIKHaIaA5vvlYfzBunpCvkLK9v__Y",
  authDomain: "olx-clone-react-fdd51.firebaseapp.com",
  projectId: "olx-clone-react-fdd51",
  storageBucket: "olx-clone-react-fdd51.appspot.com",
  messagingSenderId: "849105536621",
  appId: "1:849105536621:web:09e9efac311794805de164"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();