import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export function fbApp(): firebase.app.App {
  const apiKey = process.env.NEXT_PUBLIC_FBASE_API_KEY;
  const projectId = process.env.NEXT_PUBLIC_FBASE_PROJECT_ID;
  const messagingSenderId = process.env.NEXT_PUBLIC_FBASE_MESSAGING_SENDER_ID;
  const appId = process.env.NEXT_PUBLIC_FBASE_APP_ID;
  const measurementId = process.env.NEXT_PUBLIC_FBASE_MEASUREMENT_ID;

  const firebaseConfig = {
    apiKey: apiKey,
    authDomain: projectId + ".firebaseapp.com",
    databaseURL: "https://" + projectId + ".firebaseio.com",
    projectId,
    storageBucket: projectId + ".appspot.com",
    messagingSenderId,
    appId,
    measurementId,
  };

  return !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
}
