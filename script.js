function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.376514457082315, -2.4366102081905807),
      zoom:16,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      disableDefaultUI: true,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }