import 'package:firebase_database/firebase_database.dart';
import 'package:app/utils/zone.dart';

class UserModel {
  UserModel(this.uid, this.latitude, this.longitude, this.type);

  final String uid;
  final double latitude;
  final double longitude;
  final String type;



  void updateDB() async{
    String zone = Zone.getZone(latitude!, longitude!);
    DatabaseReference position = FirebaseDatabase.instance.ref("$type/$zone/$uid");

    position.set({
      "Lat" : latitude,
      "Lon" : longitude
    });
  }
}