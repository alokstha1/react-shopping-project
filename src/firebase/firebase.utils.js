// import firebase from 'firebase/compact/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAq44rQWpauy2msgEBPwGSs1ZxWhNUgy_8",
  authDomain: "fir-demo-clothing.firebaseapp.com",
  projectId: "fir-demo-clothing",
  storageBucket: "fir-demo-clothing.appspot.com",
  messagingSenderId: "991805769594",
  appId: "1:991805769594:web:ee3404b52181be0595b8c3",
  measurementId: "G-WF7QXDE3QB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;