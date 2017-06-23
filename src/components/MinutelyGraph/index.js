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
    this.tickValues = this.tickValues.bind(this);
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

  tickValues() {
    return [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  }

  tickFormatter(v) {
    return v.toString() + "%";
  }

  render() {
    return (
      <div className="chart">
        <strong>{this.props.data.summary}</strong>
        <Graph
          {...this.state}
          timeConverter={this.timeConverter}
          tickLabelAngle={-90}
          tickFormatter={this.tickFormatter}
          tickValues={this.tickValues}
        />
      </div>
    )
  }
}

export default MinutelyGraph;
