// Initialize and add the map
function initMap() {
    // The location of Uluru
    var birgunj = {lat: 27.0154, lng: 84.8882};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: birgunj});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: birgunj, map: map});
  }