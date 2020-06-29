import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  // search() {
  //   this.props.onSearch(this.state.term);
  // }

  handleTermChange(e) {
    this.setState = { term: e.target.value };
  }

  handleSearch(e) {
    this.props.searchSpotify(this.state.term);
    e.preventDefault();
  }

  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter film title to search soundtracks"
          onChange={this.handleTermChange}
        />
        <button className="SearchButton" onClick={this.handleSearch}>
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
