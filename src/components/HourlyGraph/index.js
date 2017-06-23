import React, { Component } from 'react';
import Graph from '../Graph';

class HourlyGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          title: 'Temperature',
          disabled: false,
          data: this.props.getAttribute('hourlyData', 'temperature')
        },
        {
          title: 'Precipitation',
          disabled: false,
          data: this.props.getAttribute('hourlyData', 'precipProbability')
        }
      ]
    }

    this.timeConverter = this.timeConverter.bind(this);
  }

  timeConverter(UNIX_timestamp){
    const d = new Date(UNIX_timestamp * 1000);
    let hours = d.getHours();
    const amPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12
    return hours + amPm;
  }

  leftTickValues() {
    const values = this.state.series[0].data;
    const minValue = values.reduce((prev, curr) => prev.y < curr.y ? prev : curr).y - 10 | 0;
    const maxValue = values.reduce((prev, curr) => prev.y > curr.y ? prev : curr).y + 10| 0;
    const increment = (maxValue - minValue) / 9 | 0;

    let range = [minValue]
    for (let i = 0; i < 7; i++) {
      range.push(range[i] + increment + 1)
    }
    range.push(maxValue);
    console.log(range)
    return range;
  }

  render() {
    return (
      <div className="chart">
        <strong>{this.props.data.summary}</strong>
        <Graph {...this.state} timeConverter={this.timeConverter} tickFormatter={v => v + "°F"} />
      </div>
    )
  }
}

export default HourlyGraph;
// <VerticalBarSeries
//   data={this.state.series[1].data}
// />
// <YAxis
//   orientation="right"
//   title={this.state.series[1].data.title}
//   tickFormat={v => v + "%"}
//   tickValues={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
// />
