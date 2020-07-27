import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchFilm = this.handleSearchFilm.bind(this);
  }

  handleSearchChange(e) {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  }

  handleSearch() {
    console.log(this.state.term);
    this.props.searchSpotify(this.state.term);
    // e.preventDefault();
  }
  handleSearchFilm() {
    console.log(this.state.term);
    this.props.searchOmdb(this.state.term);
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter film/series title to search soundtracks"
          onChange={this.handleSearchChange}
        />
        <button
          className="SearchButton"
          onClick={() => {
            this.handleSearch();
            this.handleSearchFilm();
          }}
          // onClick={this.handleSearchFilm}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
