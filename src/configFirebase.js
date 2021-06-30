var firebase = require('firebase');
 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDU6oFSYWq56tJZEiqguI1-kxBSqA2OMJE",
    authDomain: "scl016-burger-queen.firebaseapp.com",
    projectId: "scl016-burger-queen",
    storageBucket: "scl016-burger-queen.appspot.com",
    messagingSenderId: "162180320827",
    appId: "1:162180320827:web:262202a0ad5841a549161e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db =firebase.firestore();
  export default db;