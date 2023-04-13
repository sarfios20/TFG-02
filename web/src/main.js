import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js'
import { auth } from "./app/firebase.js"

onAuthStateChanged(auth, async (user) => {
    if (user) {
        if (window.location.pathname !== '/src/page.html') {
            window.location.href = "page.html";
        }
    } else {
        console.log('User signed out--');
        if (window.location.pathname !== '/src/index.html') {
            window.location.href = "index.html";
        }
    }
})