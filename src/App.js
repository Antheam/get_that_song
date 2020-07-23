import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import { makeCall } from "./util/Spotify";
import Film from "./components/Film/Film";
import { getFilm } from "./util/Omdb";
import { getYoutubeLink } from "./util/Youtube";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundtracks: [],
      film: {}
    };

    this.searchSpotify = this.searchSpotify.bind(this);
    this.searchOmdb = this.searchOmdb.bind(this);
  }

  searchSpotify(search) {
    console.log(search);
    makeCall(search).then(soundtracks => {
      this.setState({ soundtracks: soundtracks });
    });
  }

  searchOmdb(search) {
    getFilm(search).then(filmDetail => {
      console.log(filmDetail);
      this.setState({ film: filmDetail });
    });
    console.log(this.state.film);
  }

  render() {
    return (
      <div>
        <h1>Get That Song</h1>
        <div className="App">
          <SearchBar
            searchSpotify={this.searchSpotify}
            searchOmdb={this.searchOmdb}
          />
          <div className="App-playlist">
            <SearchResults soundtracks={this.state.soundtracks} />
          </div>
          <div>
            <Film film={this.state.film} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
