import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDvgJ50Rhp2HX1R-tYKxayd18hjVz86MDQ",
  authDomain: "tinder-clone-react-bbbe4.firebaseapp.com",
  databaseURL: "https://tinder-clone-react-bbbe4.firebaseio.com",
  projectId: "tinder-clone-react-bbbe4",
  storageBucket: "tinder-clone-react-bbbe4.appspot.com",
  messagingSenderId: "1044898966106",
  appId: "1:1044898966106:web:a70d98b68018adb3d0c663",
  measurementId: "G-T48P9F71WR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
