$(document).ready(function () {

    $('button').click(function(){

      var lat = parseFloat($('#lat').val())
      var long = parseFloat($('#long').val())

      console.log(lat);
      console.log(long);
      newLocation(lat,long)
    })

  initialize(20,10)
});

var map;

function newLocation(newLat,newLng){
	map.setCenter({
		lat: newLat,
		lng: newLng
	});
  var marker = new google.maps.Marker({
    position: {lat: newLat, lng: newLng},
    title:"Hello World!"
});
marker.setMap(map)
}

function initialize(x,y) {
  var mapProp = {
    center:new google.maps.LatLng(x,y),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load');
