// all non-repo imports up here
import React, { useState } from "react";

// Import all css-frameworks (if any) here
import "./Home.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import { makeCall } from "../../util/Spotify";
import Film from "../Film/Film";
import { getFilm } from "../../util/Omdb";
import { getYoutubeLink } from "../../util/Youtube";
import UserProfile from "../UserProfile/UserProfile.jsx";

const Home = () => {
  const [film, setFilm] = useState({});
  const [soundtracks, setSoundtracks] = useState([]);

  const searchOmdb = search => {
    getFilm(search).then(filmDetail => {
      console.log(filmDetail);
      setFilm(filmDetail);
    });
    console.log(film);
  };

  const searchSpotify = search => {
    console.log(search);
    makeCall(search).then(soundtracks => {
      setSoundtracks(soundtracks);
      console.log("soundtracks", soundtracks);
    });
  };

  const searchYoutube = (name, artist) => {
    getYoutubeLink(name, artist);
  };

  return (
    <div>
      <h1>Get That Song</h1>

      <div className="App">
        <SearchBar searchSpotify={searchSpotify} searchOmdb={searchOmdb} />
        <div className="App-playlist">
          <SearchResults
            soundtracks={soundtracks}
            youtubeLink={searchYoutube}
          />
        </div>
        <div>
          <Film film={film} />
          {/* <UserProfile /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
