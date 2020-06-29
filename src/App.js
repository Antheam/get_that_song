import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Spotify from "./util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundtracks: []
      // searchResults: [
      //   {
      //     name: "yellow",
      //     artist: "coldplay",
      //     album: "fix",
      //     id: 1
      //   },
      //   {
      //     name: "wait",
      //     artist: "m83",
      //     album: "lala",
      //     id: 2
      //   },
      //   {
      //     name: "all you need is love",
      //     artist: "beatles",
      //     album: "lili",
      //     id: 3
      //   }
      // ]
    };
    // this.search = this.search.bind(this);
    // this.searchSpotify = this.searchSpotify.bind(this);
  }

  // searchSpotify(term) {
  //   Spotify.makeCall().then(soundtracks => {
  //     this.setState({ soundtracks: soundtracks });
  //   });
  // }

  // search(searchTerm) {
  //   console.log(searchTerm);
  // }
  render() {
    return (
      <div>
        <h1>Get That Song</h1>
        <div className="App">
          <SearchBar searchSpotify={this.searchSpotify} />
          <div className="App-playlist">
            {/* <SearchResults searchResults={this.state.searchResults} /> */}
            <SearchResults soundtracks={this.state.soundtracks} />

            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
