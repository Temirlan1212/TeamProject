import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUereNPYZt24CFMkLA8KgKAoI3G7z8hbE",
  authDomain: "kids-5f27a.firebaseapp.com",
  projectId: "kids-5f27a",
  storageBucket: "kids-5f27a.appspot.com",
  messagingSenderId: "648637991057",
  appId: "1:648637991057:web:4fe1ceb2fb9ce10d2f9730",
  measurementId: "G-DBW1XFNYVQ",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
