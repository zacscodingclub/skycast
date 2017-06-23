import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const term = this.state.searchTerm;
    this.setState({ searchTerm: '' });
    this.props.handleSearch(term);
  }

  render() {
    return (
      <div className="App">
        <div className="hero">
          <h1>To get started, enter a location in the search!</h1>
          <form onSubmit={this.handleSubmit}>
            <input className="hero-search"
                   type="text"
                   placeholder="Search Forecast"
                   id="search"
                   name="search"
                   onChange={this.handleOnChange}
            />
            <input type="submit" className="hero-submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default LandingPage;
