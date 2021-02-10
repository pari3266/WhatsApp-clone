import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAB2zLQYEiYlEPQoIMIcNjvX7JeRhzZiCk",
    authDomain: "whatsapp-clone-54fe1/settings/general",
    databaseURL: "https://console.firebase.google.com/u/0/project/whatsapp-clone-54fe1/settings/general",
    projectId: "whatsapp - clone - 54 fe1",
    storageBucket: ,
    messagingSenderId: ,
    appId: ,
    measurementId: ,
};




const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();