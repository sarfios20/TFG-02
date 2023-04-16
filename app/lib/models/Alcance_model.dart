import 'package:firebase_database/firebase_database.dart';

class Alcance{
  Alcance(this.uid, this.cyclistId, this.timestamp, this.latitude, this.longitude, this.speedAlcance, this.speedAlerta);
  final String uid;
  final String cyclistId;
  final DateTime timestamp;
  final double latitude;
  final double longitude;
  final double speedAlerta;
  final double speedAlcance;


  void alertaDB(){
    DatabaseReference alertaRef = FirebaseDatabase.instance.ref("Alertas");

    alertaRef.child("Ciclistas").child(cyclistId).child(DateTime.now().millisecondsSinceEpoch.toString()).set({
      "Lat" : latitude,
      "Lon" : longitude,
      "IdConductor": uid,
      "speed_alcance": speedAlcance,
      "speed_alerta": speedAlerta
    });

    alertaRef.child("Conductores").child(uid).child(DateTime.now().millisecondsSinceEpoch.toString()).set({
      "Lat" : latitude,
      "Lon" : longitude,
      "IdCiclista": cyclistId,
      "speed_alcance": speedAlcance,
      "speed_alerta": speedAlerta
    });
  }
}