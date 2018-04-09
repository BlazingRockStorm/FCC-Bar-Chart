import React from 'react';
import YearGDP from './YearGDP';

class GDPList extends React.Component {
    render() {
        var list = this.props.list.map((gdp, index) => {
            return (
                <YearGDP key={index} date={ this.props.list[index][0] } money={ this.props.list[index][1] } />
            );
        });
  
        return (<div>{list}</div>);
    };
}

export default GDPList;