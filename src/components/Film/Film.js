import React from "react";
import "./Film.css";

// let film = {
//   poster:
//     "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   title: "Gladiator",
//   year: "2000"
// };

class Film extends React.Component {
  render() {
    return (
      <div className="locate">
        <img src={this.props.film.poster} />
        <h3>
          {this.props.film.title}
          <span> ({this.props.film.year})</span>
        </h3>
      </div>
    );
  }
}

export default Film;
