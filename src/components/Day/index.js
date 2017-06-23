import React, { Component } from 'react';
import Skycons from 'react-skycons';
import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props);

    this.formatDate = this.formatDate.bind(this);
    this.roundTemp = this.roundTemp.bind(this);
    this.formatIcon = this.formatIcon.bind(this);
  }

  formatIcon(icon) {
    if (icon.includes('-')) {
      icon = icon.replace(/-/g, '_');
    }

    return icon.toUpperCase();
  }

  formatDate(time, options) {
    const date = new Date(time * 1000);

    return date.toLocaleString('en-us', options);
  }

  roundTemp(temp) {
    return (temp | 2).toString() + "°F";
  }

  render() {
    const { time, temperatureMax, temperatureMin, icon, sunriseTime, sunsetTime, windGust, precipProbability, precipType } = this.props;

    return (
      <div className="day">
        <strong>{this.formatDate(time, { weekday: 'long'} )}</strong>
        <span><i>Max: </i>{this.roundTemp(temperatureMax)}</span>
        <span><i>Min: </i>{this.roundTemp(temperatureMin)}</span>
        <span><i>Sunrise: </i>{this.formatDate(sunriseTime, {  'hour': '2-digit', 'minute': '2-digit' })}</span>
        <span><i>Sunset: </i>{this.formatDate(sunsetTime, {  'hour': '2-digit', 'minute': '2-digit' })}</span>
        <span><i>Winds up to: </i>{windGust}MPH</span>
        <span>{(precipProbability * 100) | 0}% chance of { precipType || "precipitation"}</span>
        <div className="day-icon">
          <Skycons color='white' icon={this.formatIcon(icon)} autoplay={true} />
        </div>
      </div>
    )
  }
 }

 export default Day;
