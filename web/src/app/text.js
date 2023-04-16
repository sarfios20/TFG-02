import { signOut } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js"
import { auth } from "./firebase.js"
import { database } from "./firebase.js"
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";

console.log('text.js')

const logout = document.getElementById('logout-button')

logout.addEventListener('click', async (e) => {
    await signOut(auth)
})

const shame = document.getElementById('shame')
reducciónMedia()
console.log(database);



const test = document.getElementById('test')


test.addEventListener('click', async (e) => {
    console.log('test');

    const dbRef = ref(database, '/') // Use '/' to refer to the root of the database

    // Read all data from Firebase database
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val()
        console.log(data) // Display the data in the console
    });
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
//estto es temporal
function reducciónMedia() {
    const dbRef = ref(database, '/Alertas/Conductor')
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val()
        for (const uid in data) {
            for (const timestamp in data[uid]) {
                console.log(data[uid][timestamp]);
            }
        }
         // Display the data in the console
    });
}

