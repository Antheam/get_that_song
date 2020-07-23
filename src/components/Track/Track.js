import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.youtubeCall = this.youtubeCall.bind(this);
  }
  renderAction() {}
  youtubeCall() {
    console.log("clicked");
    console.log(this.props.song.name);
    console.log(this.props.song.artist);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBhdxjToxjGIcG4AWCJaIh_J9sgOtjPSnI&q=${this.props.song.name}${this.props.song.artist}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.items[0].id.videoId);
        let search = data.items[0].id.videoId;
        window.open(`https://www.youtube.com/watch?v=${search}`, "_blank");
      });
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.song.name}</h3>
          <p>
            {this.props.song.artist} | {this.props.song.album}{" "}
            <span className="Track-playbutton" onClick={this.youtubeCall}>
              <i className="fa fa-play-circle" style={{ fontSize: "20px" }} />
            </span>
          </p>
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
  }
}

export default Track;
