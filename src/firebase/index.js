// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE642HA21j0qlt_ZsLLBRIFl8I4ylgay0",
  authDomain: "dreezer-shopping.firebaseapp.com",
  projectId: "dreezer-shopping",
  storageBucket: "dreezer-shopping.appspot.com",
  messagingSenderId: "390906572679",
  appId: "1:390906572679:web:3fe5cf854be59d6ec9ad22",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
