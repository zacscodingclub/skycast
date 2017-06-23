import React, { Component } from 'react';
import MinutelyGraph from '../MinutelyGraph';
import HourlyGraph from '../HourlyGraph';
import './GraphContainer.css';

class GraphContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "hour"
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    const clicked = e.target.id;
    const current = this.state.selected;

    if (clicked !== current) { this.setState({ selected: clicked })};
  }

  render() {
    return (
      <div className="box graph-container">
        <div className="top-row graph-container-header">
          <div className="option" onClick={this.handleSelect} id="minute">
            By Minute
          </div>
          <div className="option" onClick={this.handleSelect} id="hour">
            By Hour
          </div>
        </div>
        <div className="graph-container-body">
          { this.state.selected === "hour" ?
            <HourlyGraph data ={this.props.hourlyData} />
            :
            <MinutelyGraph data={this.props.minutelyData} />
          }
        </div>
      </div>
    )
  }
}

export default GraphContainer;
