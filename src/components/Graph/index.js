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
  render() {
    return(
      <FlexibleXYPlot
        animation
        width={850}
        height={425}
        xType='time'>
        <HorizontalGridLines />
        <LineSeries
          data={this.props.series[0].data}
        />
        <XAxis
          tickFormat={v => this.props.timeConverter(v)}
          tickLabelAngle={this.props.tickLabelAngle}
          tickTotal={11}
        />
        <YAxis
          orientation="left"
          title={this.props.series[0].title}
          tickFormat={v => this.props.tickFormatter(v)}
          tickValues={this.props.tickValues()}
        />
      </FlexibleXYPlot>
    )
  }
}

export default Graph;
