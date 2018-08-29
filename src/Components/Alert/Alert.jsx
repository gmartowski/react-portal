import React, { Component } from 'react';

export class Alert extends Component {

    onClick = () => {
        console.log('Click in Alert Component');
    };

    render() {
        const { render } = this.props;
        return (<div>{render({ onClick: this.onClick })}</div>);
    }
}
