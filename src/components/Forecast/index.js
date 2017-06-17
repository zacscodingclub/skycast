import React, { Component } from 'react';

class Forecast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: props.match.params.location
    }
  }

  componentDidUpdate() {
    this.setState({ location: this.props.match.params.location });
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
