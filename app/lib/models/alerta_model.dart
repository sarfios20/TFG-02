import 'package:firebase_database/firebase_database.dart';

class Alerta{
  Alerta(this.uid, this.cyclistId, this.timestamp, this.latitude, this.longitude);
  final String uid;
  final String cyclistId;
  final DateTime timestamp;
  final double latitude;
  final double longitude;


  void alertaDB(){
    DatabaseReference alertaRef = FirebaseDatabase.instance.ref("Alertas/$cyclistId");

    alertaRef.child(DateTime.now().millisecondsSinceEpoch.toString()).set({
      "Lat" : latitude,
      "Lon" : longitude,
      "IdConductor": uid
    });
  }
}