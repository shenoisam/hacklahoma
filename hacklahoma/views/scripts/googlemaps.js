
 // function initMap(){

 //   var location  = {lat: 31.549333, lng: -97.146670};
 //   var map = new google.maps.Map(document.getElementById("map"),{
 //     zoom: 4,
 //     center: location
 //     });
 //   var marker = new google.maps.Marker({
 //       position: location,
 //       map: map
 //     });

//customize how the map creates
function initMap(){
var options = {
  zoom:8,
  center:{lat:31.5497,lng:-97.1143}
}
var map = new google.maps.Map(document.getElementById('map'), options);

//Listener for the map
google.maps.event.addListener(map, 'click', function(event){
addMarker({coords:event.latLng});
});

//temp array of markers
var markers = [
{
coords:{lat:42.4668,lng:-70.9495},
iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
content:'<h1>Lynn MA</h1>'
},
{
  coords:{lat:42.8584,lng:-70.9300},
  content:'<h1>Amesbury MA</h1>'
},
{
  coords:{lat:42.7762,lng:-71.0773}
}
];

//Add markers to map
for(var i = 0;i < markers.length;i++){
addMarker(markers[i]);
}

//Add Marker Function
function addMarker(props){
var marker = new google.maps.Marker({
  position:props.coords,
  map:map,
  //icon:props.iconImage
});

// Check for customicon
if(props.iconImage){
  // Set icon image
  marker.setIcon(props.iconImage);
}

// Check content
if(props.content){
  var infoWindow = new google.maps.InfoWindow({
    content:props.content
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
 });
}}
}
