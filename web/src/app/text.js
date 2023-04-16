import { signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"
import { auth } from "./firebase.js"

console.log('text.js')

const logout = document.getElementById('logout-button')

logout.addEventListener('click', async (e) => {
    await signOut(auth)
})

window.initMap = function initMap() {
    console.log('initMap');
    var center = {lat: 40.73877, lng: -3.8235};

    // Create a new Google Map instance
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: center
    });
}