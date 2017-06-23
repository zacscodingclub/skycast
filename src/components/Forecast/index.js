import React, { Component } from 'react';
import fetchJSONP from 'fetch-jsonp';
import ForecastService from '../../services/ForecastService';
import GeolocationService from '../../services/GeolocationService';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Weekly from '../Weekly';
import GraphContainer from '../GraphContainer';

import loading from '../../loading.svg';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.getLocation = this.getLocation.bind(this);
    this.getForecast = this.getForecast.bind(this);
    this.formattedLocation = this.formattedLocation.bind(this);
    this.filterLocation = this.filterLocation.bind(this);

    this.state = {
      fetchingData: true,
      currentLocation: null,
      weatherData: null
    }
  }

  componentDidMount() {
    const latLng = window.location.href.split('/forecast/')[1];

    this.getLocation(latLng);
    this.getForecast(latLng);
  }

  async getLocation(currentLocation) {
    const g = new GeolocationService(currentLocation);
    await fetch(g.requestURL())
        .then(response => response.json())
        .then(data => this.setState({ currentLocation: data.results[0] }))
        .catch(err => console.log(err))
  }

  async getForecast(latLng) {
    const f = new ForecastService(latLng);
    await fetchJSONP(f.requestURL())
        .then(response => response.json())
        .then(data => this.setState({ weatherData: data }))
        .catch(err => console.log(err))

    this.setState({ fetchingData: false });
  }

  formattedLocation() {
    let city = this.filterLocation("locality");
    let state = this.filterLocation("administrative_area_level_1");

    return [city.long_name, state.short_name].join(', ');
  }

  filterLocation(type) {
    const { address_components } = this.state.currentLocation;

    return address_components.filter(name => name.types.includes(type) )[0];
  }

  render() {
    const { fetchingData, currentLocation, weatherData } = this.state;

    return (
      <div className="App">
        {
          fetchingData ?
            <img src={loading} alt="loading spinner" />
          :
          <div>
            <h1>Forecast for  {this.formattedLocation()}</h1>
            <div className="top-row">
              <CurrentWeather data={weatherData.currently} />
              <GraphContainer minutelyData={weatherData.minutely} hourlyData={weatherData.hourly} />
            </div>
            <div>
              <Weekly data={weatherData.daily} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Forecast;
