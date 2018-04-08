import React, { Component } from 'react';
import * as d3 from 'd3';

var formatCurrency = d3.format("$,.2f");
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: ''
    };
  }

  componentWillMount() {
    d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json", response => {
      this.setState({ description: response.description });
    });
  }

  render() {
    return (
    <div className="container">  
      <div className="header">Gross Domestic Product</div>
      <svg className="chart"></svg>
      <div className="notes">{this.state.description}</div>
      <div className="tooltip"><b>Header</b><br /><span>Val</span></div>
    </div>
    
    );
  }
}

export default App;
