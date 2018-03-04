
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
  center:{lat:35.2059,lng:-97.4457}
}
var map = new google.maps.Map(document.getElementById('map'), options);

//Listener for the map
google.maps.event.addListener(map, 'click', function(event){
addMarker({coords:event.latLng, iconImage:'../favicon.png'});
});

//temp array of markers
// var markers = [
// {
// coords:{lat:42.4668,lng:-70.9495},
// iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
// content:'<h5>Lynn MA</h5>'
// },
// {
//   coords:{lat:42.40,lng:-73.45},
//   content:'<h5>Albany, NY</h5>'
// },
// {
//   coords:{lat:42.7762,lng:-71.0773},
//   content:'<h5>Amesbury MA</h5>'
// },
// {
//   coords:{lat:33.45,lng:-84.23}
//   content:'<h5>Atlanta,GA</h5>'
// }
// ];
var markers = [
  {
  coords:{lat:42.4668,lng:-70.9495},
  iconImage:'../favicon.png',
  content:'<h5>Lynn MA<br>Average Salary: $72,398<br>Bronze Members: 230<br>Silver Members: 110<br>Plat Members: 72</h5>'
  },
  {
  coords:{lat:42.8584,lng:-70.9300},
  iconImage:'../favicon.png',
  content:'<h5>Lynn MA<br>Average Salary: $83,123<br>Bronze Members: 356<br>Silver Members: 129<br>Plat Members: 43</h5>'
  },
  {
  coords:{lat:39.6,lng:-94.35},
  iconImage:'../favicon.png',
  content:'<h5>Kansas City, Mo<br>Average Salary: $95,237<br>Bronze Members: 138<br>Silver Members: 198<br>Plat Members: 131</h5>'
  },
  {
  coords:{lat:35.57,lng:-83.56},
  iconImage:'../favicon.png',
  content:'<h5>Knoxville, Tenn.<br>Average Salary: $128,124<br>Bronze Members: 823<br>Silver Members: 176<br>Plat Members: 276</h5>'
  },
  {
  coords:{lat:42.40,lng:-73.45},
  iconImage:'../favicon.png',
  content:'<h5>Albany, NY<br>Average Salary: $132,823<br>Bronze Members: 1874<br>Silver Members: 941<br>Plat Members: 523</h5>'
  },
  {
  coords:{lat:37.47,lng:-122.26},
  iconImage:'../favicon.png',
  content:'<h5>San Francisco, Calif.<br>Average Salary: $88,132<br>Bronze Members: 1283<br>Silver Members: 912<br>Plat Members: 587</h5>'
  },
  {
  coords:{lat:57.10,lng:-135.15},
  iconImage:'../favicon.png',
  content:'<h5>Sitka, Alaska<br>Average Salary: $72,798<br>Bronze Members: 84<br>Silver Members: 34<br>Plat Members: 11</h5>'
  },
  {
  coords:{lat:36.10,lng:-115.2},
  iconImage:'../favicon.png',
  content:'<h5>Las Vegas, NV<br>Average Salary: $148,237<br>Bronze Members: 712<br>Silver Members: 435<br>Plat Members: 249</h5>'
  },
  {
  coords:{lat:33.45,lng:-84.23},
  iconImage:'../favicon.png',
  content:'<h5>Atlanta, GA, NV<br>Average Salary: $98,120<br>Bronze Members: 945<br>Silver Members: 463<br>Plat Members: 214</h5>'
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
