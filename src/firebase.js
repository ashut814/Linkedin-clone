import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAcvCTW2f-QIqbUn3tU_VTk3wWbpo2gOFc",
  authDomain: "linkedin-clone-854a7.firebaseapp.com",
  projectId: "linkedin-clone-854a7",
  storageBucket: "linkedin-clone-854a7.appspot.com",
  messagingSenderId: "792978581934",
  appId: "1:792978581934:web:027e6b8c78b7a35630803f",
  measurementId: "G-YMJ3DZKB2S",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
