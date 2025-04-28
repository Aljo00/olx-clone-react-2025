import { toast } from "react-toastify";
import { auth, db, provider } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth";

// ========================================================================================
// SIGN IN FUNCTION
// ========================================================================================
// Allow the existing user to sign in with email and password
// ========================================================================================
export const signIn = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logined successfully.")
    return userCredential.user;
  } catch (error) {
    console.log("Error:", error);
    if (error.code === "auth/email-already-in-use") {
      toast.error("This email is already taken. Please use a different email.");
    } else if (error.code === "auth/invalid-email") {
      toast.error("The email you entered is not valid.");
    } else if (error.code === "auth/wrong-password") {
      toast.error("Incorrect password. Please try again.");
    } else if (error.code === "auth/invalid-credential") {
      toast.error("Invalid credentials.");
    } else {
      toast.error(error.message);
    }
  }
};

// ========================================================================================
// SIGN UP FUNCTION
// ========================================================================================
// Allow new users to create account with name, email, and password
// ========================================================================================
export const signUp = async ({ name, email, password }) => {
  try {
    console.log('Sign Up function called');
    console.log(name, email, password)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await addDoc(collection(db, "users"), {
      uid: userCredential.user.uid,
      name,
      email
    });
    toast.success("Account created successfully!");
  } catch (error) {
    if (error.code === "auth/admin-restricted-operation") {
      toast.error("Sign-up is disabled. Please check Firebase Authentication settings.");
    } else if (error.code === "auth/invalid-email") {
      toast.error("The email you entered is not valid.");
    } else if (error.code === "auth/weak-password") {
      toast.error("Password is too weak. Please use a stronger password.");
    } else if (error.code === "auth/email-already-in-use") {
      toast.error("This email is already registered. Please use a different email.");
    } else {
      toast.error(error.message);
    }
  }
};

// ========================================================================================
// GOOGLE FUNCTION
// ========================================================================================
// Allow the user to create and login to an existing account with Google
// ========================================================================================
export const google = async () => {
  try {
    const userCredential = await signInWithPopup(auth, provider);

    await addDoc(collection(db, "users"), {
      uid: userCredential.user.uid,
      name: userCredential.user.displayName,
      email: userCredential.user.email
    });
    toast.success("Logged in with Google successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};

// ========================================================================================
// SIGN OUT FUNCTION
// ========================================================================================
// Logs the current user out
// ========================================================================================
export const logOut = async () => {
  try {
    await signOut(auth);
    toast.success("Logged out successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};
