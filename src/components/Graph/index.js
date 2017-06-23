import React, { Component } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  makeWidthFlexible,
  LineSeries
} from 'react-vis';

const FlexibleXYPlot = makeWidthFlexible(XYPlot);

class Graph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <FlexibleXYPlot
        animation
        width={850}
        height={425}>
        <HorizontalGridLines />
        <LineSeries
          data={this.props.series[0].data}
        />
        <XAxis
          tickFormat={v => this.props.timeConverter(v)}
          tickLabelAngle={this.props.tickLabelAngle}
        />
        <YAxis
          orientation="left"
          title={this.props.series[0].title}
          tickFormat={this.props.tickFormatter}
        />
      </FlexibleXYPlot>
    )
  }
}

export default Graph;
