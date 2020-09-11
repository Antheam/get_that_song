import React from "react";
import "./Track.css";

const Track = ({ song, youtubeLink }) => {
  const youtubeCall = () => {
    console.log("clicked");
    console.log(song.name);
    console.log(song.artist);

    youtubeLink(song.name, song.artist);
  };
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{song.name}</h3>
        <p>
          {song.artist} | {song.album}
          <span className="Track-playbutton" onClick={youtubeCall}>
            <i className="fa fa-play-circle" style={{ fontSize: "20px" }} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Track;
