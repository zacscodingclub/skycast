import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import GeolocationService from '../../services/GeolocationService';
import Header from '../Header/Header';
import Forecast from '../Forecast';
import LandingPage from '../LandingPage';
import './App.css';
import './react-vis.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      recentSearches: null
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.saveLocationToLocalStorage = this.saveLocationToLocalStorage.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('forecastStorage')) {
      this.setState({
        recentSearches: JSON.parse(localStorage.getItem('forecastStorage'))
      })
    }
  }

  async handleSearch(term) {
    const g = new GeolocationService(term);
    const found = await g.geocode();

    this.saveLocationToLocalStorage(term, found.geometry.location);
    const nextPath = `/forecast/${found.geometry.location.lat},${found.geometry.location.lng}`;
    this.props.history.push(nextPath);
    this.setState({ location: found });

  }

  saveLocationToLocalStorage(term, latLng) {
    let searches = [];

    if (localStorage.getItem('forecastStorage')) {
      searches = JSON.parse(localStorage.getItem('forecastStorage'));
    }

    searches.push({term, latLng});

    if (searches.length > 5) {
      searches.shift()
    }
    localStorage.setItem('forecastStorage', JSON.stringify(searches));
  }

  render() {
    const { location, recentSearches, key } = this.state;
    const path = this.props.location.pathname;
    return (
      <div>
        <Header handleSearch={this.handleSearch} recentSearches={recentSearches} />
        {
          path !== "/" ?
            <Route exact path="/forecast/:location" render={() => <Forecast currentLocation={location} key={key} />} />
          :

          <LandingPage handleSearch={this.handleSearch} />
        }

      </div>
    );
  }
}

export default withRouter(App);
