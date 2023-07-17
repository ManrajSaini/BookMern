import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6GLmkjuCv_Wckn81X4haRf6EWbf6esD4",
  authDomain: "mernbook-7a0d8.firebaseapp.com",
  projectId: "mernbook-7a0d8",
  storageBucket: "mernbook-7a0d8.appspot.com",
  messagingSenderId: "359859606649",
  appId: "1:359859606649:web:399194884ea54dbdefb0a8"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth };