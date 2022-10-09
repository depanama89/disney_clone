import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "disneyplus-clone-2e13e.firebaseapp.com",
    projectId: "disneyplus-clone-2e13e",
    storageBucket: "disneyplus-clone-2e13e.appspot.com",
    messagingSenderId: "116629156207",
    appId: "1:116629156207:web:a2fbb878ecc1e1e10a789a",
    measurementId: "G-15CNBBHWQF"
  };
  
  const app=initializeApp(firebaseConfig);
  export const db=getFirestore(app);
  export const auth=getAuth();
  export const storage=getStorage(app);
  export const provider= new GoogleAuthProvider();
