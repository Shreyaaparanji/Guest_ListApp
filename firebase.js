import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIdVrUYC4knlbzONMcAy2w7C1ilW_zGYY",
  authDomain: "guestlistapp-de55e.firebaseapp.com",
  projectId: "guestlistapp-de55e",
  storageBucket: "guestlistapp-de55e.firebasestorage.app",
  messagingSenderId: "781561079969",
  appId: "1:781561079969:web:ca7c463abac5ea311b28e0",
  measurementId: "G-07JEM1BJK3"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const storage = firebase.storage();

export { firebase, firestore, storage };
