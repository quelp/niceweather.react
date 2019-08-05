import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather.js";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="card m-4">
            <div className="card-body">
              <Weather city="Rio de Janeiro" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
