import React, { Component } from 'react';
import MinutelyGraph from '../MinutelyGraph';
import HourlyGraph from '../HourlyGraph';
import './GraphContainer.css';

class GraphContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "hourly"
    }
  }
  render() {
    return (
      <div className="box graph-container">
        <MinutelyGraph data={this.props.minutelyData} />
        <HourlyGraph data ={this.props.hourlyData} />
      </div>
    )
  }
}

export default GraphContainer;
