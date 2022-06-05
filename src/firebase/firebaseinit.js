// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDHUi1I7b5FSooAOrqoW0iG5vIBc77bZzo",
//   authDomain: "weatherapp-1d54f.firebaseapp.com",
//   projectId: "weatherapp-1d54f",
//   storageBucket: "weatherapp-1d54f.appspot.com",
//   messagingSenderId: "808507342717",
//   appId: "1:808507342717:web:694b16dce531efd322d614",
//   measurementId: "G-WCQ970GTHZ"
// };

// // Initialize Firebase
// const firebaseAPP = firebase.initializeApp(firebaseConfig);
// export default firebaseAPP.firestore();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

require('firebase/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHUi1I7b5FSooAOrqoW0iG5vIBc77bZzo",
  authDomain: "weatherapp-1d54f.firebaseapp.com",
  projectId: "weatherapp-1d54f",
  storageBucket: "weatherapp-1d54f.appspot.com",
  messagingSenderId: "808507342717",
  appId: "1:808507342717:web:694b16dce531efd322d614",
  measurementId: "G-WCQ970GTHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db ;