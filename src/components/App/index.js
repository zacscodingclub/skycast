import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import GeolocationService from '../../services/GeolocationService';
import Header from '../Header/Header';
import Forecast from '../Forecast';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null
    }
    console.log(process.env.REACT_APP_GMAPS_KEY);
    this.handleSearch = this.handleSearch.bind(this);
    this.saveLocationToLocalStorage = this.saveLocationToLocalStorage.bind(this);
  }

  async handleSearch(term) {
    const g = new GeolocationService(term);
    const found = await g.geocode();
    this.setState({ location: found });

    this.saveLocationToLocalStorage(term, found.geometry.location);
    const nextPath = `/forecast/${found.geometry.location.lat},${found.geometry.location.lng}`;
    this.props.history.push(nextPath);
  }

  saveLocationToLocalStorage(term, latLng) {
    // let previousSearches = JSON.parse(localStorage.getItem('forecastStorage'));
    // debugger;
    //
    // localStorage.setItem('forecastStorage')
    console.log(`SAVING ${term} and (${latLng.lat}, ${latLng.lng}) to local storage`);
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <Route exact path="/forecast/:location" render={() => <Forecast currentLocation={this.state.location} />} />
      </div>
    );
  }
}

export default withRouter(App);
