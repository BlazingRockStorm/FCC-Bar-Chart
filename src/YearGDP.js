import React from 'react';

class YearGDP extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.date}</p>
                <p>{this.props.money}</p>
            </div>
        );
    };
}

export default YearGDP;