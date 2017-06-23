import React, { Component } from 'react';
import Day from '../Day';
import './Weekly.css';

class Weekly extends Component {
  render() {
    const { data } = this.props.data;
    const days = data.slice(0, 7).map((d, i) => <Day key={i} {...d} />)
    return (
      <div className="weekly">
        <h3>The Week Ahead</h3>
        <div className="box">
          <h4>{this.props.data.summary}</h4>
          <div className="weekly-days">
            {days}
          </div>
        </div>
      </div>
    )
  }
}

export default Weekly;
