import { render } from "@testing-library/react";
import React, { Component } from "react";

class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" title={this.props.data.original_title}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${this.props.data.poster_path}`} />
        </div>
        <p>{this.props.data.title}</p>
      </div>
    );
  }
}

export default Cards;
