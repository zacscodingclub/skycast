import React from 'react';
import Skycons from 'react-skycons';
import './CurrentWeather.css';

const formatTemp = (temp) => {
  return (temp | 0).toString() + "°F";
}


const formatIcon = (icon) => {
  if (icon.includes('-')) {
    icon = icon.replace(/-/g, '_');
  }

  return icon.toUpperCase();
}

const formatPercent = (value) => {
  return ((value * 100) | 0).toString() + "%";
}

const formatMPH = (value) => {
  return (value | 0).toString() + " MPH";
}

const formatDegreeToCompass = (degree) => {
    const val = parseInt((degree/22.5)+.5, 10);
    const arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];
    return arr[(val % 16)]
}

const CurrentWeather = (props) => {
  const { apparentTemperature, temperature, icon, humidity, summary, cloudCover, dewPoint, precipProbability, uvIndex, windBearing, windGust, windSpeed } = props.data;

  return (
    <div className="box" style={{ 'width': '33%'}}>
      <h2>Right Now</h2>
      <div className="current-weather">
        <div className="current-weather-item">
          <ul className="list">
            <li className="list-item">
              <div className="list-content">
                <strong>Temperature: </strong> {formatTemp(temperature)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>Heat Index: </strong> {formatTemp(apparentTemperature)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>% Precipitation: </strong> {formatPercent(precipProbability)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>Dew Point: </strong> {formatTemp(dewPoint)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>Humidity: </strong> {formatPercent(humidity)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>Cloud Cover: </strong> {formatPercent(cloudCover)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>UV Index: </strong> {uvIndex}
              </div>
            </li>
          </ul>
        </div>
        <div className="current-weather-item">
          <h4>{ summary }</h4>
          <div className="current-icon">
            <Skycons color='black' icon={formatIcon(icon)} autoplay={true} />
          </div>
          <ul className="list">
            <li className="list-item">
              <div className="list-content">
                <strong>Wind Speed: </strong> {formatMPH(windSpeed)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>Wind Gusts: </strong> {formatMPH(windGust)}
              </div>
            </li>
            <li className="list-item">
              <div className="list-content">
                <strong>Wind Direction: </strong> {formatDegreeToCompass(windBearing)}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather;
