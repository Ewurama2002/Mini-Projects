// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4cX7QbzjV640K_YRH8j6t_D8gLzGXNeg",
  authDomain: "educational-app-4d37d.firebaseapp.com",
  projectId: "educational-app-4d37d",
  storageBucket: "educational-app-4d37d.appspot.com",
  messagingSenderId: "180396161096",
  appId: "1:180396161096:web:aa73595b9cae6df39a807d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = (app);

export{auth}