const clientId = "c759abba6e264fa99fd4a9bb306f6ad3";
const redirectUri = "http://localhost:3000";
const clientSecret = "dd60a68fb0504ae6a7ccbb82b0ab3924";

let getOAuth = fetch("https://accounts.spotify.com/api/token", {
  method: "POST",
  body:
    "grant_type=client_credentials&client_id=" +
    clientId +
    "&client_secret=" +
    clientSecret,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
  .then(function(resp) {
    // Return the response as JSON
    return resp.json();
  })
  .then(function(data) {
    // Log the API data
    console.log("token", data);

    // Store token data
    token = data.access_token;
    tokenType = data.token_type;
    expires = new Date().getTime() + data.expires_in * 1000;
  })
  .catch(function(err) {
    // Log any errors
    console.log("something went wrong", err);
  });

// function getSongs() {
//   fetch(
//     `https://api.spotify.com/v1/search?q=inception%20soundtrack&type=playlist`,
//     {
//       headers: {
//         Authorization: tokenType + " " + token,
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     }
//   )
//     .then(resp => resp.json())
//     .then(data => {
//       let tracks = data.playlists.items[0].tracks.href;
//       console.log(data);
//       fetch(
//         `${tracks}?fields=items(track(name,artists(name),album(name,href)))`,
//         {
//           headers: {
//             Authorization: tokenType + " " + token,
//             "Content-Type": "application/x-www-form-urlencoded"
//           }
//         }
//       )
//         .then(response => response.json())
//         .then(data => {
//           data.items.map(info => {
//             const trackDetails = {
//               name: info.track.name,
//               artist: info.track.artists[0].name,
//               album: info.track.album.name
//             };
//             console.log(`${artist}, ${album},${name}`);

//             return trackDetails;
//           });
//         });
//     });
// }

function getSongs() {
  fetch(
    `https://api.spotify.com/v1/search?q=inception%20soundtrack&type=playlist`,
    {
      headers: {
        Authorization: tokenType + " " + token,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }
  )
    .then(resp => resp.json())
    .then(data => {
      let tracks = data.playlists.items[0].tracks.href;
      console.log(data);
      return fetch(
        `${tracks}?fields=items(track(name,artists(name),album(name,href)))`,
        {
          headers: {
            Authorization: tokenType + " " + token,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      );
    })
    .then(response => response.json())
    .then(data => {
      data.items.map(info => {
        const trackDetails = {
          name: info.track.name,
          artist: info.track.artists[0].name,
          album: info.track.album.name
        };
        console.log(trackDetails);
        return trackDetails;
      });
    });
}

let makeCall = function() {
  // If current token is invalid, get a new one
  if (!expires || expires - new Date().getTime() < 1) {
    console.log("new call");
    getOAuth().then(function() {
      getPets();
    });
  }
};

export default spotify;
