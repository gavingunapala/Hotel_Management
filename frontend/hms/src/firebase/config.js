// import * as firebase from 'firebase/app';
// var firebase = require('firebase/app');
import firebase from "firebase";
import 'firebase/storage';
import 'firebase/firestore';
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCuMhIvCzpAE9Y_dU7wbwP1z1RmOB_zXsY",
        authDomain: "ninja-firegram-a5001.firebaseapp.com",
        projectId: "ninja-firegram-a5001",
        storageBucket: "ninja-firegram-a5001.appspot.com",
        messagingSenderId: "194048465587",
        appId: "1:194048465587:web:6e133e6dab487cf5026ec6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };