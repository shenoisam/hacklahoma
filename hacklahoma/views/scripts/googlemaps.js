//customize how the map creates
function initMap(){
var options = {
  zoom:8,
  center:{lat:35.2059,lng:-97.4457}
}
var map = new google.maps.Map(document.getElementById('map'), options);

//Listener for the map
google.maps.event.addListener(map, 'click', function(event){
addMarker({
  coords:event.latLng, 
  iconImage:'../favicon.png',
  content:'<h5>NA<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
});
});

var markers = [
  {
  coords:{lat:42.4668,lng:-70.9495},
  iconImage:'../favicon.png',
  content:'<h5>Lynn MA<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:42.8584,lng:-70.9300},
  iconImage:'../favicon.png',
  content:'<h5>Lynn MA<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:39.6,lng:-94.35},
  iconImage:'../favicon.png',
  content:'<h5>Kansas City, Mo<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:35.57,lng:-83.56},
  iconImage:'../favicon.png',
  content:'<h5>Knoxville, Tenn.<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:42.40,lng:-73.45},
  iconImage:'../favicon.png',
  content:'<h5>Albany, NY<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:37.47,lng:-122.26},
  iconImage:'../favicon.png',
  content:'<h5>San Francisco, Calif.<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:57.10,lng:-135.15},
  iconImage:'../favicon.png',
  content:'<h5>Sitka, Alaska<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:36.10,lng:-115.2},
  iconImage:'../favicon.png',
  content:'<h5>Las Vegas, NV<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
  },
  {
  coords:{lat:33.45,lng:-84.23},
  iconImage:'../favicon.png',
  content:'<h5>Atlanta, GA, NV<br>Average Salary: N/A<br>Bronze Members: N/A<br>Silver Members: N/A<br>Plat Members: N/A</h5>'
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
