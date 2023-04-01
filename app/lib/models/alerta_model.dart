import 'package:firebase_database/firebase_database.dart';

class Alerta{
  Alerta(this.uid, this.driverId, this.timestamp, this.latitude, this.longitude);
  final String uid;
  final String driverId;
  final DateTime timestamp;
  final double latitude;
  final double longitude;


  void alertaDB(){
    DatabaseReference alertaRef = FirebaseDatabase.instance.ref("Alertas/$uid");

    alertaRef.child(DateTime.now().millisecondsSinceEpoch.toString()).set({
      "Lat" : latitude,
      "Lon" : longitude,
      "IdConductor": uid
    });
  }
}