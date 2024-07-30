import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyDndqtIfe-MkNAEa6t1K5AkDIwrlNeT2wo",
  authDomain: "techcampus-86c54.firebaseapp.com",
  projectId: "techcampus-86c54",
  storageBucket: "techcampus-86c54.appspot.com",
  messagingSenderId: "889820426020",
  appId: "1:889820426020:web:a7c2a0f0fe91e401f2cdb1",
});

const basedb = getFirestore(app);
const baseStorage = getStorage(app);

export { basedb, baseStorage };
