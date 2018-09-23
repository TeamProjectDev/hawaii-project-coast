var map; //map for the API 
var allLocation = []; //array for all the locations on where to measure trash
var allMarkers = []; //array for all the markers
var addingEvent = false; //bool for adding event

function initMap() { //initation
  map = new google.maps.Map(document.querySelector('#map'), { // where the map is located in HMTL
    center: {lat:21.300776, lng:-158.051877}, //where it will be defaulted too
    zoom: 15, //zoom of how close it is
    mapTypeId: 'satellite'
  });

    /* For adding Markers */
    trashMarkers.forEach(cur => { //gets trash markers from data
      let marker = new google.maps.Marker(cur[0]); 
      marker.addListener('click',function() { //when marker is clicked
        map.setZoom(15);
        map.setCenter(marker.getPosition());
        let childs = statsGUI.childNodes;
        ToStat();
        console.log(childs);
        childs[3].innerHTML = cur[1].type; /* changes the info in the stats div by accessing childs*/
        childs[5].src = cur[1].img;
        childs[9].innerHTML = cur[1].description;
        childs[13].innerHTML = `${cur[0].position.lat},${cur[0].position.lng}`;
      });
      marker.setMap(map);
      allMarkers.push(marker);
    });

    

  /* marker End */

  map.addListener('click', (info) => {
    if(addingEvent) {
      addingEvent = false;
      ToHome();
    }
    return allMarkers.forEach((cur) => {
      return cur.setVisible(true)
    });
  });

  /* locations Start */
  for(var coords in beachLocations) { //makes polygon from coordinates

    /* function testing */

    let location = new google.maps.Polygon({ /* describes the polygon detail */
      paths: beachLocations[coords],
      strokeColor: '#ffff00',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#ffff00',
      fillOpacity: 0.35
    });
    location.addListener('click',(e) => { //if area clicked; marker for area appear
      if(addingEvent) {
        addingEvent = false;
        let temp = new google.maps.Marker({position: e.latLng,map:map});
        allMarkers.push(temp);
        ToReportSub();
      }
      else {
        console.log(e.latLng.lat);
        console.log(e.latLng.lng);
        allMarkers.map((cur) => { 
          return google.maps.geometry.poly.containsLocation(cur.position, location) ? cur.setVisible(true) : cur.setVisible(false) //whether marker visible or not
        });
        ToStat();
        childs[3].innerHTML = 'Location'; /* changes the info in the stats div by accessing childs*/
        childs[5].src = 'none';
        childs[9].innerHTML = 'Reported Trash';
        childs[13].innerHTML = `oof`;
      };
    });
    location.setMap(map); //sets location on the map
    allLocation.push(location); //pushes the locations in an array
  };
};