
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTWTl7kehX5XrnS5tavx7e0IPoMlSdwho",
  authDomain: "mobile-car-project.firebaseapp.com",
  projectId: "mobile-car-project",
  storageBucket: "mobile-car-project.appspot.com",
  messagingSenderId: "163232417314",
  appId: "1:163232417314:web:5c7b581c72437b39ef2c7b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};