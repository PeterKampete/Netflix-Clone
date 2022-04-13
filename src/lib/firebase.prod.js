import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import { seedDatabase } from "../seed"; what does seeding a database do???

//we need to seed the database

// need a config
const config = {
  apiKey: "AIzaSyDjsBonJ5G2PU6QVYsWgENtGZ96ekMxSkg",
  authDomain: "kflix-d578b.firebaseapp.com",
  projectId: "kflix-d578b",
  storageBucket: "kflix-d578b.appspot.com",
  messagingSenderId: "874928930641",
  appId: "1:874928930641:web:488ccf8fe889e24e291d70",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
