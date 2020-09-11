import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList.jsx";

const SearchResults = ({ soundtracks, youtubeLink }) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={soundtracks} youtubeLink={youtubeLink} />
    </div>
  );
};

export default SearchResults;
