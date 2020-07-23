function getYoutubeLink() {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhdxjToxjGIcG4AWCJaIh_J9sgOtjPSnI&q=sunflower`
  )
    .then(response => response.json())
    .then(data => console.log(data.items[0].id.videoId));
}
