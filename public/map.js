var Map = function(latlng,zoom){


  this.googleMap = new google.maps.Map(document.getElementById("map"), {
    center: latlng,
    zoom: zoom
  });
}

//   this.addMarker =  function(latlng, label, title) {
//      var marker = new google.maps.Marker({
//       position: latlng,
//       map: this.googleMap,
//       label: label,
//       title: title
//      });
//      return marker;
//   }

//   this.bindClick = function(){
//     var counter = 1
//     google.maps.event.addListener(this.googleMap, "click", function(userClick){
//       // console.log( userClick.latLng.lat())
//       // console.log( userClick.latLng.lng())
//       this.addMarker({lat: userClick.latLng.lat(), lng: userClick.latLng.lng()}, counter.toString())
//       counter += 1;
//     }.bind(this));
//   }

// this.addInfoWindow= function(latLng, title){
//   var marker = this.addMarker(latLng, "1", title);
//   marker.addListener("click", function(){
//     var infoWindow = new google.maps.InfoWindow({
//       content: this.title
//     });
//     infoWindow.open(this.map, marker);
//   });
// }



// }