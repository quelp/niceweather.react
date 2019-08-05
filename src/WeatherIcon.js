import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default class WeatherIcon extends Component {
  iconUrl = () => {
    return `http://openweathermap.org/img/wn/${this.props.code}@2x.png`;
  };

  render() {
    return <img src={this.iconUrl()} />;
  }
}
