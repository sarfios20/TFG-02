import { signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"
import { auth } from "./firebase.js"

console.log('text.js')

const logout = document.getElementById('logout-button')

logout.addEventListener('click', async (e) => {
    await signOut(auth)
})

window.initMap = function initMap() {
    console.log('initMap');
}