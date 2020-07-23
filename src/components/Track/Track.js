import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.youtubeCall = this.youtubeCall.bind(this);
  }
  youtubeCall() {
    console.log("clicked");
    console.log(this.props.song.name);
    console.log(this.props.song.artist);

    this.props.youtubeLink(this.props.song.name, this.props.song.artist);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.song.name}</h3>
          <p>
            {this.props.song.artist} | {this.props.song.album}
            <span className="Track-playbutton" onClick={this.youtubeCall}>
              <i className="fa fa-play-circle" style={{ fontSize: "20px" }} />
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Track;
