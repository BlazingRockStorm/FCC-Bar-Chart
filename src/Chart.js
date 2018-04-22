import React, { Component } from 'react';

class Chart extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        var data=this.props.data;
        const svgDimensions = {
          width: Math.max(this.props.parentWidth, 300),
          height: 400
        }
        
        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
            </svg>
        )
    }
}

export default Chart;