import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js'
import { auth } from "./app/firebase.js"
/*
import './app/signupForm.js'
import './app/signinForm.js'
import './app/selector.js'
import './app/logout.js'
*/

onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log('user signed in--')
        if (window.location.pathname === '/src/page.html') {
            console.log('page')
        } else {
            window.location.href = "page.html"
        }
    } else {
        console.log('user signed out--')
        if (window.location.pathname === '/src/index.html') {
            console.log('index')
        } else {
            window.location.href = "index.html"
        }
    }
    
})
/*
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log('user signed in--')
        window.location.href = "page.html"
    } else {
        console.log('user signed out--')
        window.location.href = "index.html"
    }
    
})*/