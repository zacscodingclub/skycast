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
      redirect: false
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.saveLocationToLocalStorage = this.saveLocationToLocalStorage.bind(this);
  }

  async handleSearch(term) {
    const g = new GeolocationService(term);
    const latLng = await g.geocode();
    this.saveLocationToLocalStorage(term, latLng);
    const nextPath = `/forecast/${latLng.lat},${latLng.lng}`;
    this.props.history.push(nextPath);
  }

  saveLocationToLocalStorage(term, latLng) {
    console.log(`SAVING ${term} and (${latLng.lat}, ${latLng.lng}) to local storage`);
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <Route exact path="/forecast/:location" component={Forecast} />
      </div>
    );
  }
}

export default withRouter(App);
