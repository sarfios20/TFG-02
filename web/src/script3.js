import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"

import { auth } from './firebase.js'


onAuthStateChanged(auth, async (user) => {
    console.log(user.uid)
    window.location.href = "page.html"
})

const signupDiv = document.getElementById('signup-div')
signupDiv.style.display = 'none'

const signinDiv = document.getElementById('signin-div')
signinDiv.style.display = 'block'

const signinSelect = document.getElementById('singin-select')
const signupSelect = document.getElementById('singup-select')

signinSelect.addEventListener('click', async (e) => {
    console.log('signinDiv clicked')
    signupDiv.style.display = 'none'
    signinDiv.style.display = 'block'
});

signupSelect.addEventListener('click', async (e) => {
    console.log('signupDiv clicked')
    signinDiv.style.display = 'none'
    signupDiv.style.display = 'block'
});

const signinForm = document.getElementById('signin-form')

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signinForm['signin-email'].value
    const password = signinForm['signin-password'].value

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
});

const signupForm =document.getElementById('signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
    }
});