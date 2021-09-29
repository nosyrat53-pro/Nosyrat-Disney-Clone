// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQcnmND9FomZqKYLixS3iiok3z53bt0u0",
  authDomain: "nosyrat-disney-clone.firebaseapp.com",
  projectId: "nosyrat-disney-clone",
  storageBucket: "nosyrat-disney-clone.appspot.com",
  messagingSenderId: "782813986268",
  appId: "1:782813986268:web:09f4cebbf3c34f203e2319",
  measurementId: "G-ZQ5ZFTFN5Y"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, storage , provider } ;

export default db ;