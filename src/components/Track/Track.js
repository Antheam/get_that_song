import React from "react";
import "./Track.css";

class Track extends React.Component {
  renderAction() {}

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.song.name}</h3>
          <p>
            {this.props.song.artist} | {this.props.song.album}
          </p>
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
  }
}

export default Track;
