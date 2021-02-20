import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyAgDvamWXXyi-Pm5OUUqSrgfWYHKtCTrHI",
  authDomain: "workout-log-7609a.firebaseapp.com",
  projectId: "workout-log-7609a",
  storageBucket: "workout-log-7609a.appspot.com",
  messagingSenderId: "647020464415",
  appId: "1:647020464415:web:5aaa55bbf2e480d573c82a",
  measurementId: "G-F0GWJJL399",
});

export const db = app.firestore();
export const workoutsCollection = db.collection("workouts");
