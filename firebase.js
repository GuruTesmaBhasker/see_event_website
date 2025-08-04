// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsHcgNKuW_4D0SF8nGZcUWmtwEF7xWfrs",
  authDomain: "see-event-6f2ba.firebaseapp.com",
  projectId: "see-event-6f2ba",
  storageBucket: "see-event-6f2ba.firebasestorage.app",
  messagingSenderId: "701870395562",
  appId: "1:701870395562:web:e55e32a8d6bef806b6c0d3",
  measurementId: "G-R9GXE15WM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { app, analytics, auth, db };