import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import { makeCall } from "./util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundtracks: []
    };

    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify(search) {
    console.log(search);
    makeCall(search).then(soundtracks => {
      this.setState({ soundtracks: soundtracks });
    });
  }

  render() {
    return (
      <div>
        <h1>Get That Song</h1>
        <div className="App">
          <SearchBar searchSpotify={this.searchSpotify} />
          <div className="App-playlist">
            <SearchResults soundtracks={this.state.soundtracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
