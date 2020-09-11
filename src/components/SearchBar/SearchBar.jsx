import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchSpotify, searchOmdb }) => {
  const [term, setTerm] = useState("");

  const handleSearchChange = event => {
    setTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = () => {
    // e.preventDefault();
    console.log(term);
    searchSpotify(term);
  };

  const handleSearchFilm = () => {
    console.log(term);
    searchOmdb(term);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter film/series title to search soundtracks"
        onChange={handleSearchChange}
      />

      <button
        className="SearchButton"
        onClick={() => {
          handleSearch();
          handleSearchFilm();
        }}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
