function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.376514457082315, -2.4366102081905807),
      zoom:16,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      disableDefaultUI: true,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }




const change = () => {

  // Toggle the grayscale-mode class on the body element
  document.body.classList.toggle('grayscale-mode');

  // Toggle the background color
  const isGrayscale = document.body.classList.contains('grayscale-mode');
  if (isGrayscale) {
    document.body.style.backgroundColor = '#000'; // Set grayscale background color
  } else {
    document.body.style.backgroundColor = '#fff'; // Set original background color
  }
}

const buttonclick = document.getElementById('toggleButton');
buttonclick.addEventListener('click', function() {
    change();
     })