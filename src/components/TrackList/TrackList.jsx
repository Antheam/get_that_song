import React from "react";
import "./TrackList.css";
import Track from "../Track/Track.jsx";

const TrackList = ({ tracks, youtubeLink }) => {
  return (
    <div className="TrackList">
      {tracks.map(song => {
        return <Track key={song.id} song={song} youtubeLink={youtubeLink} />;
      })}
    </div>
  );
};

export default TrackList;
