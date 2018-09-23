<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet"> <!--For font-->
  </head>

  <body>
    <div id="main">
      <div id="notification">
          <img src='images/bell.png' onclick='Dropdown()'>
          <div id="notificationDropDown">
            <h2>2 New Notifications</h2>
              <div id="notifyContainer">
                <p class='notifyReport'>Bottle Water Reported At Waikiki Beach at </p>
                <p class='notifyReport'>Plasic Bag Reported at White Shoals Beach</p>
              </div>
          </div>
      </div>

      <h1 id='name'>Project Coast</h1>
      
      <div id="home" class='category'>
        <h3 class='home_cat' onclick='ToStat()'>Statistics</h3>
        <h3 class='home_cat' onclick='ToReport(); AddEvent()'>report</h3>
        <h3 class="home_cat" >Log Out</h3>
      </div>

      <div id="statistics" class='category'>
        <h3 onclick='ToHome()' class='homeButton'>Home</h1>
        <h2 class='header'> test </h2>
        <img src=" " alt="OOGA BOOGA CHA">
        <h3 class='header'>Overview</h3>
        <p> </p>
        <h3 class='header'>Location</h3>
        <p> </p>
      </div>

      <div id="report" class='category'>
        <div id="process" class='reportSub'>
          <h3 onclick='ToHome()' class='homeButton'>Home</h3>
          <h2>Report A Case</h2>
        </div>

        <div id="info" class='reportSub'>
          <h2>Information</h2>
          <h3 class='header'>Image</h3>
          <h3 class='header'>Description</h3>
          <textarea rows="4" cols="50"> </textarea>
          <h4 onclick='Cancel()'>Cancel</h4>
        </div>
      </div>

    </div>



    <div id="map"> <!-- BEWARE! Dont touch map-->
      
    </div>

    <script src='domElements.js'></script>
    <script src='data.js'> </script>
    <script src='magic.js'> </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCLCh0dX81ASRsu9OcFkWI__iMxcgaESg&callback=initMap"></script>
  </body>

</html>