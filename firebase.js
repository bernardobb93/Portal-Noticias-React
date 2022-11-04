import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoG1D8ipN7ayazF38sLVEk9JJdFRdVoaQ",
    authDomain: "portalnoticias-2e5d7.firebaseapp.com",
    projectId: "portalnoticias-2e5d7",
    storageBucket: "portalnoticias-2e5d7.appspot.com",
    messagingSenderId: "699726992851",
    appId: "1:699726992851:web:0a93bfc25ab80c9021cb26"
  };

  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();
  
  export { db, auth };
 
