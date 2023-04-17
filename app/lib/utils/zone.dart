class Zone {
  static String getZone(double latitude, double longitude){
    print("$latitude//$longitude");
    double lat = (latitude*100).ceilToDouble();
    double lon = (longitude*100).floorToDouble();

    print("${latitude*100}");
    print("${lat}");
    print("${lat} * ${lon}");

    print("${lat} * ${lon}");

    //print("${formatter(lat)};${formatter(lon)}");

    return "${formatter(lat)};${formatter(lon)}";
  }

  static String formatter(double number){
    if(number.isNegative){
      number = number.abs();
      return "-${number.toStringAsFixed(0).padLeft(4, '0')}";
    }
    return "+${number.toStringAsFixed(0).padLeft(4, '0')}";
  }
}