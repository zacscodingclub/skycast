import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({
      search: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.search);
  }

  render() {
    return (
      <div className="header-search">
        <form onSubmit={this.handleSubmit}>
          <input className="search-input"
                 type="text"
                 placeholder="Search Forecast"
                 id="search"
                 name="search"
                 onChange={this.handleOnChange}
          />
          <input type="submit" className="search-submit" />
        </form>
      </div>
    )
  }
}

export default Search;
