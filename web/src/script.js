//import './firebase.js'
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { auth } from './firebase.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    } catch (error) {
        console.log(error)
    }
});

const logout = document.querySelector('#logout')

logout.addEventListener('click', async (e) => {
    await signOut(auth)
    console.log('user signed out')
})

onAuthStateChanged(auth, async (user) => {
    logingCheck(user)
   /* if (user) {
        logingCheck(user)
    } else {
        logingCheck(user)
    }*/
})

const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

console.log(loggedOutLinks)
console.log(loggedInLinks)

const logingCheck = user => {
    if (user) {
        loggedOutLinks.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => link.style.display = 'block')
    } else {
        loggedOutLinks.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')
    }
}

const sinInForm = document.querySelector('#signin-form')

sinInForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = sinInForm['signin-email'].value
    const password = sinInForm['signin-password'].value

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    } catch (error) {
        console.log(error)
    }

})