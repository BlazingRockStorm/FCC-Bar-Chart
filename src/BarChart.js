import React from 'react'
import * as d3 from 'd3'
import Chart from './Chart';
import DataSeries from './DataSeries';

 
class BarChart extends React.Component {
    render() {
      return (
        <Chart width={this.props.width} height={this.props.height}>
          <DataSeries
            data={[30, 10, 5, 8, 15, 10]}
            width={this.props.width}
            height={this.props.height}
            color="cornflowerblue"
          />
        </Chart>
      );
    }
  }
  
export default BarChart;