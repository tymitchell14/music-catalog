// Get all record cards
var record_cards = document.querySelectorAll('.record-card');

// Get the close button of the Spotify embedded player
var close_btn = document.getElementById('close-player');

/* 
  TO DO: 
  
      1) Copy and paste BOTH functions you wrote back in the html-event-handlers.js script.

      2) Loop through all records in the third row. For each record, do the following:
         a) Add an event listener so that when clicked: 
            Get its Spotify track ID saved as its attribute.
            Pass this ID as an argument to the appropriate function to update the track of the player. 
      
      3) Add an event listener to the close button so that when clicked it calls the appropriate function
         to close the Spotify embedded player. 
      
*/


function openSpotifyPlayer(track_id) {
   // Get the iframe element that contains the Spotify embedded player
   var player_iframe = document.getElementById('spotify-player');

   // Update the iframe source to the clicked track
   player_iframe.src = `https://open.spotify.com/embed/track/${track_id}`;

   // Show and animate the player
   document.getElementById('spotify-player-container').classList.add('visible');
}

function closeSpotifyPlayer() {
   // Close the Spotify embedded player by changing its visibility
   document.getElementById('spotify-player-container').classList.remove('visible');
}

for(var i = 3; i <= 5; i++) {
   console.log("hi");
   var record = record_cards[i];

   //get the spotify track id of the song 
   let track_id = record.getAttribute('data-track-id');

   //add event listenr to each record
   record.addEventListener('click', function() 
   {openSpotifyPlayer(track_id);}, false);
}

close_btn.addEventListener('click', closeSpotifyPlayer, false);





