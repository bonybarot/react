import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getAuth } from "firebase/auth";

const firebaseConfig = (
    {
        apiKey: "AIzaSyAtLZ03Ihc2KqLEhSytJOraZ2dWEtuLgv8" ,
        authDomain:  process.env.REACT_FIREBASE_AUTH_DOMAIN,
        databaseURL:  process.env.REACT_FIREBASE_DATABASE_URL,
        projectId:  process.env.REACT_FIREBASE_PROJECT_ID,
        storageBucket:  process.env.REACT_FIREBASE_STORAGE_BUCKET,
        messagingSenderId:  process.env.REACT_FIREBASE_MESSEGING_SENDER_ID,
        appId:  process.env.REACT_FIREBASE_APP_ID,
        measurementId:  process.env.REACT_FIREBASE_MEASUREMENT_ID 
      }
)


const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
export default app ;