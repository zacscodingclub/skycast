import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
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
