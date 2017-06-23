import React, { Component } from 'react';
import { timeFormat } from 'd3';
import { LineChart } from 'react-d3-basic';

class HourlyGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data.data
    }

    this.mungeData = this.mungeData.bind(this);
    this.timeConverter = this.timeConverter.bind(this);
  }

  componentDidMount() {
    this.setState({
      data: this.mungeData()
    })
  }

  timeConverter(UNIX_timestamp){
    const d = new Date(UNIX_timestamp * 1000);
    let hours = d.getHours();
    const amPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12
    return hours + amPm;
  }

  mungeData() {
    return this.state.data.map(item => {
      return {
        "date": new Date(item.time * 1000),
        "temperature": item.temperature,
      }
    });
  }

  render() {
    const parseDate = timeFormat("%I%p");
    const x = r => parseDate(r.date);

    const chartSeries =[{
        field: 'temperature',
        name: 'Temperature'
      }
    ];

    return (
      <div className="hourly-graph">
        <div className="chart">
          <LineChart
            data={this.state.data}
            width={850}
            height={425}
            chartSeries={chartSeries}
            x={x}
            xScale='time'
          />
        </div>
      </div>
    )
  }
}

export default HourlyGraph;
