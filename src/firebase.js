import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCtVT6lXiIWae6ohTGxAq89zgs3AKg3ETw",
  authDomain: "blog-app-ab95d.firebaseapp.com",
  projectId: "blog-app-ab95d",
  storageBucket: "blog-app-ab95d.appspot.com",
  messagingSenderId: "247282750494",
  appId: "1:247282750494:web:0baffad882a4a0dfb4ca0f",
  measurementId: "G-REZ2JTMCGC"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app