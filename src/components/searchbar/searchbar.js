import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  onSerachText = (e) => {
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <input
        className="search-bar"
        placeholder="search for movie title"
        value={this.props.search}
        onChange={this.onSerachText}
      />
    );
  }
}

export default Search;
