require('dotenv').config();

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: process.env.BLOG_API_KEY,
  authDomain: process.env.BLOG_AUTH_DOMAIN,
  projectId: process.env.BLOG_PROJECT_ID,
  storageBucket: process.env.BLOG_STORAGE_BUCKET,
  messagingSenderId: process.env.BLOG_MESSAGE_SENDER_ID,
  appId: process.env.BLOG_APP_ID
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

