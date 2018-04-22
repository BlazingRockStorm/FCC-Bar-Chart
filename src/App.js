import React, { Component } from 'react';
import * as d3 from 'd3';
import GDPList from './GDPList';
import Chart from './Chart';

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
      {/* <GDPList list={this.state.data} /> */}
      <Chart data={this.state.data} />
      <div className="notes">{this.state.description}</div>
    </div>
    
    );
  }
}

export default App;
