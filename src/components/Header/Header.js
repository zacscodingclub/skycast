import React from 'react';
import Search from '../Search';

const Header = ({ handleSearch }) => {
  return (
    <div className="App-header">
      <h1>Skycast</h1>
      <Search handleSearch={handleSearch} />
    </div>
  )
}

export default Header;
