import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import './Header.css';

const Header = ({ handleSearch }) => {
  return (
    <div className="App-header">
      <Link to='/'><h1>Skycast</h1></Link>
      <Search handleSearch={handleSearch} />
    </div>
  )
}

export default Header;
