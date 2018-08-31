import React, { Component } from 'react';

export class ButtonSuccess extends Component {

    onClick = () => {
        console.log('Button success alert !');
    };

    render() {

        const{ render, children} = this.props;

        const Render = render || children;
        return <Render {...this.props} onClick={this.onClick} />;
    }
}
