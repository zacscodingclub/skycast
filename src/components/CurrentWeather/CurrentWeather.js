import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = (props) => {
  const { apparentTemperature, temperature, summary, cloudCover, dewPoint, precipIntensity, precipProbability, time, windBearing, windGust, windSpeed } = props.data;

  return (
    <div className="box">
      <h3>CurrentWeather</h3>
      <h4>{ summary }</h4>
      <ul className="list">
        <li className="list-item">
          <div className="list-content">
            <strong>Temperature:</strong> {temperature}
          </div>
        </li>
        <li className="list-item">
          <div className="list-content">
            <strong>Heat Index:</strong> {apparentTemperature}
          </div>
        </li>
        <li className="list-item">
          <div className="list-content">
            <strong>% Precipitation: </strong> {precipProbability}
          </div>
        </li>
        <li className="list-item">
          <div className="list-content">
            <strong>Dew Point:</strong> {dewPoint}
          </div>
        </li>
        <li className="list-item">
          <div className="list-content">
            <strong> </strong>
          </div>
        </li>
        <li className="list-item">
          <div className="list-content">
            <strong> </strong>
          </div>
        </li>
        <li className="list-item">
          <div className="list-content">
            <strong> </strong>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CurrentWeather;
