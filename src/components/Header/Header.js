import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import RecentSearches from '../RecentSearches';
import './Header.css';

const Header = ({ handleSearch,recentSearches }) => {
  return (
    <div className="App-header">
      <Link to='/'><h1>Skycast</h1></Link>
      <Search handleSearch={handleSearch} />
      <RecentSearches data={recentSearches} />
    </div>
  )
}

export default Header;
