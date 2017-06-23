import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RecentSearches.css';

class RecentSearches extends Component {
  render() {
    const { data } = this.props;
    if (!data) { return (<div className="recent-searches"><p>No Recent Searches</p></div>) };

    let searches = data.map((search, index) => {
      let latLng = `${search.latLng.lat},${search.latLng.lng}`;
      return (
        <li key={index}>
          <Link to={`/forecast/${latLng}`}>{search.term}</Link>
        </li>
    )});
    return (
      <div className="recent-searches">
        <p>Recent Searches:</p>
        <ul className="recent-searches-list">
          {searches}
        </ul>
      </div>
    )
  }
}

export default RecentSearches;
