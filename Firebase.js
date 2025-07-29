import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAR7094YD4GvnASsOrD5kNIz3brXuXTo_Y",
  authDomain: "web-pro-f71c4.firebaseapp.com",
  projectId: "web-pro-f71c4",
  storageBucket: "web-pro-f71c4.firebasestorage.app",
  messagingSenderId: "910141686240",
  appId: "1:910141686240:web:ed7fa29aa564a41d00ab85",
  measurementId: "G-CXK0ZF2PBZ",
  databaseURL: "https://web-pro-f71c4-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue, set };
