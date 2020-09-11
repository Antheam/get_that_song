import React, { useState, useEffect } from "react";

function UserProfile() {
  const [details, setDetails] = useState({
    //need to import useState
    user: null,
    playlists: [],
    songs: []
  });

  const getUser = () => {
    return fetch("http://localhost:3000/users/1")
      .then(resp => resp.json())
      .then(data => {
        const songs = data.playlists.map(p => p.songs);

        setDetails({
          user: data.first_name,
          playlists: data.playlists,
          songs
        });
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const getSongs = () => {
    console.log(details.songs);
    return details.songs.map(song => <h4>{song.title}</h4>);
  };

  console.log("details state>>>>>>", details);
  return (
    <div>
      <h1>
        Welcome
        {console.log("user", details.user)}
        {details.user}
      </h1>
      <h3>My Playlists</h3>

      {details.playlists.map((playlist, index) => (
        <div key={index}>
          <h3>Playlist title: {playlist.title}</h3>
          <p>Songs:</p>
          <ul>
            {" "}
            {playlist.songs.map((song, index) => (
              <li key={index}>{song.title}</li>
            ))}{" "}
          </ul>{" "}
        </div>
      ))}
    </div>
  );
}
export default UserProfile;
