require('dotenv').config();

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCmq1UlYy8r_5vdivrG1QVfmKWsoR-fLQo",
  authDomain: "blog-app-a6895.firebaseapp.com",
  projectId: "blog-app-a6895",
  storageBucket: "blog-app-a6895.appspot.com",
  messagingSenderId: "602861684862",
  appId: "1:602861684862:web:9417bb308c38ca6fd6302f"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();





