import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBZ7Ury3kgZ8DN4XlNBdGUbjHWgf5z1ZME",
  authDomain: "lasfamstore.firebaseapp.com",
  projectId: "lasfamstore",
  storageBucket: "lasfamstore.appspot.com",
  messagingSenderId: "740304062153",
  appId: "1:740304062153:web:42fefcd3f14e90b16faf18",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
