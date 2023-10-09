import * as firebase from 'firebase';




// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSUvLfGTisqVKF1PCGsBYn2HPQm67ZMjI",
  authDomain: "crawford2u-b3781.firebaseapp.com",
  projectId: "crawford2u-b3781",
  storageBucket: "crawford2u-b3781.appspot.com",
  messagingSenderId: "584683432984",
  appId: "1:584683432984:web:eca87d160259e4286ea76d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();