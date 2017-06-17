import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import GeolocationService from './GeolocationService';
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
  }

  async handleSearch(term) {
    const g = new GeolocationService(term);
    let latLng = await g.geocode();
    console.log(latLng);
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <Route path="/forecast/:location" component={Forecast} />
      </div>
    );
  }
}

export default App;
