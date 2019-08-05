import React, { Component } from "react";

class Search extends Component {
  state = "";

  submit = event => {
    event.preventDefault();
    this.props.submit(this.state.keyword);
  };

  updateKeyword = event => {
    this.setState({
      keyword: event.target.value
    });
  };
  render() {
    return (
      <form onSubmit={event => this.submit(event)}>
        <input
          type="text"
          placeholder="What is the weather in?"
          className="p-2 mb-2 rounded border"
          onChange={event => this.updateKeyword(event)}
        />
      </form>
    );
  }
}

export default Search;
