import React, { Component } from 'react';
import * as d3 from 'd3';
import GDPList from './GDPList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      data: []
    };
  }

  componentDidMount() {
    d3.json("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json")
    .then( response => {
      this.setState({ 
        description: response.description,
        data: response.data 
      });
    })
    .catch(err => console.log(err)); 
  }

  render() {
    return (
    <div className="container">  
      <div className="header">Gross Domestic Product</div>
      <svg className="chart"></svg>
      <GDPList list={this.state.data} />
      <div className="notes">{this.state.description}</div>
      <div className="tooltip"><b>Header</b><br /><span>Val</span></div>
    </div>
    
    );
  }
}

export default App;
