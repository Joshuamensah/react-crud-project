import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBB2U89_-PXPFl9Q0LU_eGwsJZhFQQAOWg",
  authDomain: "users-app-32a2e.firebaseapp.com",
  projectId: "users-app-32a2e",
  storageBucket: "users-app-32a2e.appspot.com",
  messagingSenderId: "829062471381",
  appId: "1:829062471381:web:091f1fe650470c9bd94c5c"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

export default firebase; 




