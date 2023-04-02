import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { auth } from './firebase.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js";


const signupDiv = document.getElementById('signup-div')
signupDiv.style.display = 'none'

const signinDiv = document.getElementById('signin-div')

const signinForm = document.getElementById('signin-form')

signinForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signinForm['signin-email'].value
    const password = signinForm['signin-password'].value

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        signupDiv.style.display = 'block'
        signinDiv.style.display = 'none'
    } catch (error) {
        console.log(error)
    }


/*
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
    } catch (error) {
        console.log(error)
    }*/
});
/*

signinDiv.style.display = 'none'*/