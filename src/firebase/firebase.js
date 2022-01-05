import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHGktGXq0Jc2gthfdVCLfWisra88qx-GE",
  authDomain: "linkedin-clone-7ba92.firebaseapp.com",
  projectId: "linkedin-clone-7ba92",
  storageBucket: "linkedin-clone-7ba92.appspot.com",
  messagingSenderId: "185101394726",
  appId: "1:185101394726:web:ae76a6990eeea79e19d7e7",
  measurementId: "G-EVB8XYK0FT",
};

// Connects local app with live server
const firebaseApp = firebase.initializeApp(firebaseConfig);

//get the firestore database

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
