import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth=app.auth();
    this.db = app.database();
  }
// *** Auth API ***
 
doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
    
      // *** User API ***
 
  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
}

export default Firebase;
  


  //TO DELETE ONCE CODE IS FULLY WORKING AND AWARE THAT FIREBASE HAS BEEN IMPLEMENTED CORRECTLY
  //CODE PROTECTED IN .ENV
  //INCLUDE .ENV IN GIT IGNORE
//   const firebaseConfig = {
//     apiKey: "AIzaSyAepJ3ZXdP-2O6Ge6024THA4ZtCbweILFE",
//     authDomain: "pocket-money-9ca0b.firebaseapp.com",
//     databaseURL: "https://pocket-money-9ca0b.firebaseio.com",
//     projectId: "pocket-money-9ca0b",
//     storageBucket: "pocket-money-9ca0b.appspot.com",
//     messagingSenderId: "943188973644",
//     appId: "1:943188973644:web:826e803f2a152ef747fce9",
//     measurementId: "G-BE9D3K3L0F"
//   };
