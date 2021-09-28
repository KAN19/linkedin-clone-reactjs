import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0I0jbXLE_PXUhCdwDOaOADsSqaH0Ja2E",
  authDomain: "linkedin-clone-d0ef9.firebaseapp.com",
  projectId: "linkedin-clone-d0ef9",
  storageBucket: "linkedin-clone-d0ef9.appspot.com",
  messagingSenderId: "182922795593",
  appId: "1:182922795593:web:3e5206bef8fb8504127d98",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
