import React, { Component } from 'react';
import Graph from '../Graph';

class MinutelyGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          title: 'Precipitation',
          disabled: false,
          data: this.props.getAttribute('hourlyData', 'precipProbability')
        }
      ]
    }

    this.timeConverter = this.timeConverter.bind(this);
    this.tickFormatter = this.tickFormatter.bind(this);
  }


  timeConverter(UNIX_timestamp) {
    const d = new Date(UNIX_timestamp * 1000);
    return d.toLocaleString('en-us', {  'hour': '2-digit', 'minute': '2-digit' });
  }

  tickFormatter(v) {
    return (v *100).toString() + "%"
  }

  tic
  render() {
    return (
      <div className="chart">
        <strong>{this.props.data.summary}</strong>
        <Graph {...this.state}
          timeConverter={this.timeConverter}
          tickLabelAngle={-90}
          tickFormatter={this.tickFormatter}/>
      </div>
    )
  }
}

export default MinutelyGraph;
