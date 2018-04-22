import React from 'react';

class Bar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            offset: 0
        };
    }

    render() {
        return (
            <rect
            fill={this.props.color}
            width={this.props.width}
            height={this.props.height}
            x={this.props.offset}
            y={this.props.availableHeight - this.props.height}
            />
        );
    }
}
  
export default Bar