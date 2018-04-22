import React from 'react';
import * as d3 from 'd3';
import Bar from './Bar';

class DataSeries extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            data: []
        };
    }

    render() {
        const xScale = d3.scaleBand()
                    .rangeRound([0, this.props.width])
                    .padding(0.1)
                    .domain(this.props.data.map(function(d) { return d.name; }));
 
        const yScale = d3.scaleLinear()
                    .domain([0, d3.max(this.props.data, function(d) { return d.value; })])
                    .range([0, this.props.height]);
      
    // const yScale = d3.scale.linear()
    //     .domain([0, d3.max(this.props.data)])
    //     .range([0, this.props.height]);
      
    //   const xScale = d3.scale.ordinal()
    //     .domain(d3.range(this.props.data.length))
    //     .rangeRoundBands([0, this.props.width], 0.05);
      
      const bars = this.props.data.map((point, i) => {
        return (
          <Bar
            height={yScale(point)}
            width={xScale.rangeRound()}
            offset={xScale(i)}
            availableHeight={this.props.height}
            color={this.props.color}
            key={i}
          />
        );
      });
  
      return <g>{bars}</g>
    }
  }
  
export default DataSeries