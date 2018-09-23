var map; //map for the API 
var allLocation = []; //array for all the locations on where to measure trash
var allMarkers = []; //array for all the markers
var addingEvent = false; //bool for adding event

/* faked code */
var marker1;
var marker2;
var rectangle;

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

  /* Grid code */

  marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(21.235569, -158.282443),
        map: map,
        title: 'marker1',
        visible: false
    });
    google.maps.event.addListener(marker1, 'click', function (evt) {
        infowindow.setContent(marker1.getPosition().toUrlValue(6));
        infowindow.open(map, this);
    });
    marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(21.714141, -157.619666),
        map: map,
        title: 'marker2',
        visible: false
    });
    google.maps.event.addListener(marker2, 'click', function (evt) {
        infowindow.setContent(marker1.getPosition().toUrlValue(6));
        infowindow.open(map, this);
    });
    rectangle = new google.maps.Rectangle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        bounds: new google.maps.LatLngBounds(
        marker1.getPosition(),
        marker2.getPosition())
    });

    var leftSideDist = Math.round((marker2.getPosition().lng() - marker1.getPosition().lng()) * 10000) / 100;
    var belowSideDist = Math.round((marker2.getPosition().lat() - marker1.getPosition().lat()) * 10000) / 100;

    google.maps.event.addListener(marker1, 'dragend', function () {

        rectangle.setBounds(new google.maps.LatLngBounds(marker1.getPosition(), marker2.getPosition()));
        leftSideDist = Math.round((marker2.getPosition().lng() - marker1.getPosition().lng()) * 10000) / 100;
        makeGrid();
    });

    google.maps.event.addListener(marker2, 'dragend', function () {

        rectangle.setBounds(new google.maps.LatLngBounds(marker1.getPosition(), marker2.getPosition()));
        belowSideDist = Math.round((marker2.getPosition().lat() - marker1.getPosition().lat()) * 10000) / 100;
        makeGrid();
    });
    makeGrid();
}

var rectangleLat = [];
var rectangleLng = [];

function makeGrid() {
    for (x in rectangleLng) {
        for (y in rectangleLng[x]) {
            if (rectangleLng[x][y].setMap) {
                rectangleLng[x][y].setMap(null)
                rectangleLng[x][y] = null;
            }
        }
    }
    var leftSideDist = marker2.getPosition().lng() - marker1.getPosition().lng();
    var belowSideDist = marker2.getPosition().lat() - marker1.getPosition().lat();

    var dividerLat = 10;
    var dividerLng = 10;
    var excLat = belowSideDist / dividerLat;
    var excLng = leftSideDist / dividerLng;

    var m1Lat = marker1.getPosition().lat();
    var m1Lng = marker1.getPosition().lng();
    var m2Lat = marker2.getPosition().lat();
    var m2Lng = marker2.getPosition().lng();

    for (var i = 0; i < dividerLat; i++) {
        if (!rectangleLng[i]) rectangleLng[i] = [];
        for (var j = 0; j < dividerLng; j++) {
            if (!rectangleLng[i][j]) rectangleLng[i][j] = {};


            rectangleLng[i][j] = new google.maps.Rectangle({
                strokeColor: '#FFFFFF',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.1,
                map: map,
                bounds: new google.maps.LatLngBounds(
                new google.maps.LatLng(m1Lat + (excLat * i), m1Lng + (excLng * j)),
                new google.maps.LatLng(m1Lat + (excLat * (i + 1)), m1Lng + (excLng * (j + 1))))

            });

            rectangleLng[i][j].addListener('click',(e) => { //if area clicked; marker for area appear
              if(addingEvent) {
                addingEvent = false;
                let temp = new google.maps.Marker({position: e.latLng,map:map});
                allMarkers.push(temp);
                ToReportSub();
              }
              else {
                allMarkers.map((cur) => { 
                  return google.maps.geometry.poly.containsLocation(cur.position, this[i][j]) ? cur.setVisible(true) : cur.setVisible(false) //whether marker visible or not
                });
              };
            });

          }
        }

  /* end */

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
  // for(var coords in beachLocations) { //makes polygon from coordinates

  //   /* function testing */

  //   let location = new google.maps.Polygon({ /* describes the polygon detail */
  //     paths: beachLocations[coords],
  //     strokeColor: '#ffff00',
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: '#ffff00',
  //     fillOpacity: 0.35
  //   });
  //   location.addListener('click',(e) => { //if area clicked; marker for area appear
  //     if(addingEvent) {
  //       addingEvent = false;
  //       let temp = new google.maps.Marker({position: e.latLng,map:map});
  //       allMarkers.push(temp);
  //       ToReportSub();
  //     }
  //     else {
  //       allMarkers.map((cur) => { 
  //         return google.maps.geometry.poly.containsLocation(cur.position, location) ? cur.setVisible(true) : cur.setVisible(false) //whether marker visible or not
  //       });
  //     };
  //   });
  //   location.setMap(map); //sets location on the map
  //   allLocation.push(location); //pushes the locations in an array
  // };
};