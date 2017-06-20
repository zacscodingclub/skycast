import React, { Component } from 'react';
import fetchJSONP from 'fetch-jsonp';
import ForecastService from '../../services/ForecastService';
import GeolocationService from '../../services/GeolocationService';
import loading from '../../loading.svg';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.getLocation = this.getLocation.bind(this);
    this.getForecast = this.getForecast.bind(this);

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

      debugger;

    this.setState({ fetchingData: false });
  }

  render() {
    const { fetchingData, currentLocation, weatherData } = this.state;

    return (
      <div className="App">
        {
          fetchingData ?
            <img src={loading} alt="loading spinner" />
          :
            <h2>Forecast for  {weatherData.latitude}</h2>
        }
      </div>
    );
  }
}

export default Forecast;
