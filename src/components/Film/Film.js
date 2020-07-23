import React from "react";
import "./Film.css";

class Film extends React.Component {
  render() {
    return (
      <div className="Film-locate">
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
