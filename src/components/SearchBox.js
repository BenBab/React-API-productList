import React, { Component } from "react";

export default class SearchBox extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.props.search(event.target.value);
  }

  render() {
    return (
      <div className="App-container">
        <input
          type="text"
          value={this.props.searchValue}
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </div>
    );
  }
}
