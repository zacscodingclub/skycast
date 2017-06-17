import React, { Component } from 'react';

class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h2>Forecast</h2>
        <p>{ this.state.location }</p>
      </div>
    );
  }
}

export default Forecast;
