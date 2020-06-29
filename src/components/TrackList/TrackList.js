import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.soundtrack.map(song => {
          return <Track track={song} />;
        })}
      </div>
    );
  }
}

export default TrackList;
