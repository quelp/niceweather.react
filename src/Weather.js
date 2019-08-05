import React, { Component } from "react";
import axios from "axios";
import "./Weather.css";
import ConvertDate from "./ConvertDate";
import WeatherIcon from "./WeatherIcon";
import Spinner from "react-bootstrap/Spinner";

export default class Weather extends Component {
  apiKey = "ee15d316bfe39b39eee6a79f1c1cd639";
  apiRoot = "https://api.openweathermap.org";
  state = {
    loaded: false
  };

  showResults = response => {
    console.log(response);
    this.setState({
      loaded: true,
      weather: {
        date: response.data.dt,
        timezone: response.data.timezone,
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: Math.round(response.data.main.temp),
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
      }
    });
  };

  componentDidMount() {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${this.props.city}&appid=${
      this.apiKey
    }&units=metric`;
    axios.get(apiUrl).then(this.showResults);
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <h1>{this.state.weather.city}</h1>
          <ul>
            <li>
              <ConvertDate
                timestamp={this.state.weather.date}
                timezone={this.state.weather.timezone}
              />
            </li>
            <li>{this.state.weather.description}</li>
          </ul>
          <div className="row">
            <div className="col-sm-6 ">
              <div className="clearfix">
                <WeatherIcon code={this.state.weather.icon} />

                <div className="temperature float-left">
                  {this.state.weather.temperature}
                  <small>°C</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <ul>
                <li>Humidity: {this.state.weather.humidity}%</li>
                <li>Wind: {this.state.weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner animation="border" variant="info" className="loader" />;
    }
  }
}
