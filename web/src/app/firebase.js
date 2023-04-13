import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCQb6kpbbyEPq03tWUPfkL7J7V60xRmKv8",
   authDomain: "tfg-01-3db43.firebaseapp.com",
   databaseURL: "https://tfg-01-3db43-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "tfg-01-3db43",
   storageBucket: "tfg-01-3db43.appspot.com",
   messagingSenderId: "235696168560",
   appId: "1:235696168560:web:729f7b87eb4ccbd8139eb5"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);