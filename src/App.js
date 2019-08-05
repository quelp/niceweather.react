import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="card m-3">
          <div className="card-body">
            <Weather city="Paris" />
            <Weather city="lisbon" />
            <Weather city="Tokyo" />
          </div>
        </div>
      </div>
    );
  }
}
