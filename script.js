function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.376514457082315, -2.4366102081905807),
      zoom:16,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      disableDefaultUI: true,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

// Get the grayscale toggle button element
const grayscaleToggleButton = document.getElementById('grayscaleToggle');

// Listen for the toggle button click event
grayscaleToggleButton.addEventListener('click', function() {
  // Toggle the grayscale class on the body element
  document.body.classList.toggle('grayscale-mode');
});


