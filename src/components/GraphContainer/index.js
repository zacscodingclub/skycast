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
    this.getAttribute = this.getAttribute.bind(this);
  }

  handleSelect(e) {
    const clicked = e.target.id;
    const current = this.state.selected;

    if (clicked !== current) { this.setState({ selected: clicked })};
  }

  getAttribute(time, attr) {
    return this.props[time].data.map((item, index) => {
      return {
        x: item.time,
        y: item[attr],
      }
    });
  }

  render() {
    return (
      <div className="graph-container">
        <div className="top-row graph-container-header">
          <div className="option" onClick={this.handleSelect} id="minute">
            <strong>By Minute</strong>
          </div>
          <div className="option" onClick={this.handleSelect} id="hour">
            <strong>By Hour</strong>
          </div>
        </div>
        <div className="graph-container-body">
          { this.state.selected === "hour" ?
            <HourlyGraph data={this.props.hourlyData} getAttribute={this.getAttribute}/>
            :
            <MinutelyGraph data={this.props.minutelyData} getAttribute={this.getAttribute}/>
          }
        </div>
      </div>
    )
  }
}

export default GraphContainer;
