import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2i-tgBdwCZyYjVh5Q7rH__euiVLiR9yI",
  authDomain: "discord-34515.firebaseapp.com",
  databaseURL: "https://discord-34515.firebaseio.com",
  projectId: "discord-34515",
  storageBucket: "discord-34515.appspot.com",
  messagingSenderId: "759682042915",
  appId: "1:759682042915:web:c2778bd848ff8a2d3f7596",
  measurementId: "G-TF3P5XCGT3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
