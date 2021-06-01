// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCd8jBxZraGZh8FH3w2vpUDBNzyID5jaWw",
    authDomain: "clone-22960.firebaseapp.com",
    projectId: "clone-22960",
    databaseURL: "https://clone-22960.firebaseio.com",
    storageBucket: "clone-22960.appspot.com",
    messagingSenderId: "772129878453",
    appId: "1:772129878453:web:fa0bed60b1b546ed17e9fc",
    measurementId: "G-P16369PSM3"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebaseapp.auth();

  export {db, auth};
