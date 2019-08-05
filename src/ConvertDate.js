import React, { Component } from "react";

export default class ConvertDate extends Component {
  convertedDate = () => {
    let date = new Date(
      this.props.timestamp * 1000 + (this.props.timezone - 3600) * 1000
    );
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = weekdays[date.getDay()];

    return `${day} ${hours}:${minutes}`;
  };
  render() {
    return <div>{this.convertedDate()}</div>;
  }
}
