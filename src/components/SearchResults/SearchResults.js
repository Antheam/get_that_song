import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {this.props.soundtracks.map(soundtrack => {
          return <TrackList soundtrack={soundtrack} />;
        })}
        {/* <TrackList tracks={this.props.searchResults} /> */}
      </div>
    );
  }
}

export default SearchResults;
