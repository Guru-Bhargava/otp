import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCucof8g4gBf3OfrE6FChE12ax8-N7I5M",
  authDomain: "phone-auth-58521.firebaseapp.com",
  projectId: "phone-auth-58521",
  storageBucket: "phone-auth-58521.appspot.com",
  messagingSenderId: "854172131529",
  appId: "1:854172131529:web:0d08a3bb926dde5f6cad18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
