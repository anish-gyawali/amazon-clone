
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC1rZTHRuMFdk_pmZj9qR7D--ExwomHyMM",
  authDomain: "clone-c661f.firebaseapp.com",
  projectId: "clone-c661f",
  storageBucket: "clone-c661f.appspot.com",
  messagingSenderId: "235577630150",
  appId: "1:235577630150:web:820a16fdd34be2668866c7",
  measurementId: "G-MP7LN5Y402",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth =firebase.auth();

export {db,auth};
