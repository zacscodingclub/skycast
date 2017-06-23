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
          data: this.props.getAttribute('minutelyData', 'precipProbability')
        }
      ]
    }

    this.timeConverter = this.timeConverter.bind(this);
    this.tickFormatter = this.tickFormatter.bind(this);
    this.padLeft = this.padLeft.bind(this);
  }

  padLeft(str) {
    return str.length < 2 ? '0' + str : str;
  }

  timeConverter(UNIX_timestamp) {
    const d = new Date(UNIX_timestamp * 1000);
    const minutes = this.padLeft(d.getMinutes().toString());
    const hours = this.padLeft(d.getHours().toString());

    return `${hours}:${minutes}`;
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
