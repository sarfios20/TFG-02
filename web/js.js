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
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Read data from the database
const ref = database.ref('Incidente');


function initMap() {
  // Set the center of the map
  var center = {lat: 40.73877, lng: -3.8235};

  // Create a new Google Map instance
  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center
  });

  ref.on('value', function(snapshot) {
  const data = snapshot.val();
  for (const zone in data) {
      console.log(zone);
      for (const uid in data[zone]) {
          console.log(uid);
          for (const timestamp in data[zone][uid]) {
              console.log(timestamp);
              console.log();
              var myLatlng = new google.maps.LatLng(data[zone][uid][timestamp]['Lat'],data[zone][uid][timestamp]['Lon']);
              var marker = new google.maps.Marker({
                  position: myLatlng,
                  title: timestamp,
                  map: map
              });
          }
      }
  }
});

}