
 function initMap(){

   var location  = {lat: 31.549333, lng: -97.146670};
   var map = new google.maps.Map(document.getElementById("map"),{
     zoom: 4,
     center: location
     });
   var marker = new google.maps.Marker({
       position: location,
       map: map
     });

 }
