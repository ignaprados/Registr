import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCXLbToMMDUMWlUzQzjhIas4Q63Kqsr4iw",
  authDomain: "registro-de-ingreso-y-salidas.firebaseapp.com",
  projectId: "registro-de-ingreso-y-salidas",
  storageBucket: "registro-de-ingreso-y-salidas.appspot.com",
  messagingSenderId: "21945970262",
  appId: "1:21945970262:web:4bc1bb691a6109193a95f7",
  measurementId: "G-KYC80J3MDJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
