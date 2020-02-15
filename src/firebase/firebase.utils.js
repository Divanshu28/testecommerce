import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA54wouIWZTM7vndRx6Wpd1c-9mUvsIHIo",
    authDomain: "crwn-db-aed52.firebaseapp.com",
    databaseURL: "https://crwn-db-aed52.firebaseio.com",
    projectId: "crwn-db-aed52",
    storageBucket: "crwn-db-aed52.appspot.com",
    messagingSenderId: "803283377916",
    appId: "1:803283377916:web:96812cdd73b4e0bc438179",
    measurementId: "G-PE6P888ZZJ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

