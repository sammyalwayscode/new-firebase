import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBNvfaHTZwLDDYbaIj7ZK1vi_c2M2zNsBg",
  authDomain: "test-1419a.firebaseapp.com",
  projectId: "test-1419a",
  storageBucket: "test-1419a.appspot.com",
  messagingSenderId: "721679351440",
  appId: "1:721679351440:web:1a1089760e7e69b35e2215",
});

const db = getFirestore(app);
export { db };
