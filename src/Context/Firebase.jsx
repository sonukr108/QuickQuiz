import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";

const {
  VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: VITE_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_FIREBASE_PROJECT_ID,
  storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
// Fetch Questions Category-wise
export const getQuestionsByCategory = async (category) => {
  try {
    const querySnapshot = await getDocs(
      collection(db, "categories", category, "questions")
    );

    const questions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return questions;
  } catch (error) {
    console.error("Error fetching questions: ", error);
    return [];
  }
};


// Add Question Method
export const addQuestionToFirestore = async (category, questionId, questionData) => {
  try {
    await setDoc(
      doc(db, "categories", category, "questions", questionId),
      questionData
    );

    console.log("Question added successfully!");
  } catch (error) {
    console.error("Error adding question: ", error);
  }
};


// User Registration Method
export const registerUser = async (email, password, name) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "Users", user.uid), {
      email,
      name,
    });

    return { success: true, message: "User Registered Successfully!" };
  } catch (error) {
    return { success: false, message: error.code || error.message };
  }
};


// User Login Method
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);

    return { success: true, message: "User Logged in Successfully!" };
  } catch (error) {
    return { success: false, message: error.code || error.message };
  }
};

// Google Sign-In Method
export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Add user to Firestore if it doesn't exist already
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      name: user.displayName,
    });

    return { success: true, user };
  } catch (error) {
    console.error("Google Sign-In Error: ", error);
    return { success: false, message: error.code || error.message };
  }
};