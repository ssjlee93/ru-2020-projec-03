import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAepJ3ZXdP-2O6Ge6024THA4ZtCbweILFE",
  authDomain: "pocket-money-9ca0b.firebaseapp.com",
  databaseURL: "https://pocket-money-9ca0b.firebaseio.com",
  projectId: "pocket-money-9ca0b",
  storageBucket: "pocket-money-9ca0b.appspot.com",
  messagingSenderId: "943188973644",
  appId: "1:943188973644:web:826e803f2a152ef747fce9",
  measurementId: "G-BE9D3K3L0F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInUser = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
}

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(GoogleProvider);
};

const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => {
  auth.signInWithPopup(FacebookProvider);
};


// export const updateDisplayName = (display) => {
//   const user = auth.currentUser;
//   user.updateProfile({
//     displayName: display
//   })
// }

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, uid } = user;
    try {
      await userRef.set({
        displayName,
        email,
        uid,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};