import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc } from "firebase/firestore";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB0QHboSsc1HJeK4zN0fPP3_vZqXxA0FfU",
  authDomain: "quickquiz-108.firebaseapp.com",
  projectId: "quickquiz-108",
  storageBucket: "quickquiz-108.firebasestorage.app",
  messagingSenderId: "1062404336831",
  appId: "1:1062404336831:web:1ae661dbf0ed8034432a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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

// Add Question Method (Manual questionId from form)
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

export { db };
