import * as firebase from "firebase";
import "firebase/auth";

const app = {
    apiKey: "AIzaSyCY41_VgO4M3L6GzxOERyHm2tbmcEGNwZw",
    authDomain: "fir-login-24dc8.firebaseapp.com",
    databaseURL: "https://fir-login-24dc8.firebaseio.com",
    projectId: "fir-login-24dc8",
    storageBucket: "fir-login-24dc8.appspot.com",
    messagingSenderId: "628813199588",
    appId: "1:628813199588:web:f0e2dd105bcd4cacff54f1"
  };

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {app, googleAuthProvider}