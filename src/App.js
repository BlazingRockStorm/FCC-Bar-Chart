import React, { Component } from 'react';
import axios from 'axios';
// import * as d3 from 'd3';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      data: []
    };
  }

  componentDidMount() {
    axios.get("https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json").then(response => {
      let api = response.data ;
      this.setState({ 
        description: api.description,
        data: api.data[1][0] 
      });
      console.log(api.data[1]);
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
