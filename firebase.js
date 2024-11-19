import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALK-DPwE39PNLQm0mMTgwhyGec87JNuu0",
  authDomain: "guestlist2-96728.firebaseapp.com",
  projectId: "guestlist2-96728",
  storageBucket: "guestlist2-96728.appspot.com",
  messagingSenderId: "214043690183",
  appId: "1:214043690183:web:6bd2c48ec5705fe5382ae2",
  measurementId: "G-QCZZ4YR4Z4"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, firestore, storage };
