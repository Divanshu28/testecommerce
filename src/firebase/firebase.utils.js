import firebase from 'firebase/app';
import 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
