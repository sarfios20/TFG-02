import 'dart:async';

import 'package:app/utils/type.dart';
import 'package:firebase_database/firebase_database.dart';

class UserSubscription{
  StreamSubscription? userChanged;
  StreamSubscription? userRemoved;

  UserSubscription(String ref, Function(DataSnapshot, UserType) update, Function(DataSnapshot) remove) {
    DatabaseReference readCiclistas = FirebaseDatabase.instance.ref(ref);

    userChanged = readCiclistas.onValue.listen((event) {
      if(event.snapshot.exists){
        UserType type = UserType.values.firstWhere((element) => element.name == readCiclistas.parent!.path);
        update(event.snapshot,type);
      }
    });
    userRemoved = readCiclistas.onChildRemoved.listen((event) {
      remove(event.snapshot);
    });
  }

  void cancel(){
    userChanged?.cancel();
    userRemoved?.cancel();
  }
}