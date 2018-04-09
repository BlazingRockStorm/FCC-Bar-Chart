import React, { Component } from 'react';
import * as d3 from 'd3';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      data: []
    };
  }

  componentDidMount() {
    d3.json("https://cdn.rawgit.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json")
    .then( response => {
      this.setState({ 
        description: response.description,
        data: response.data[1][0]  
      });
    })
    .catch(err => console.log(err)); 
  }

  render() {
    return (
    <div className="container">  
      <div className="header">Gross Domestic Product</div>
      <svg className="chart"></svg>
      <div>{this.state.data}</div>
      <div className="notes">{this.state.description}</div>
      <div className="tooltip"><b>Header</b><br /><span>Val</span></div>
    </div>
    
    );
  }
}

export default App;
