import React, { Component } from 'react';
import './about.less';

export class About extends Component {

    componentWillReceiveProps() {
        console.log('component will receive props');
    }

    shouldComponentUpdate() {
        console.log('should component update');
        return true;
    }

    componentWillUpdate() {
        console.log('component will update');
    }

    componentDidUpdate() {
        console.log('component will update');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        console.log('render about.jsx');
        return (
            <div className="about">
                <h1 className="about__title">About page</h1>
                {this.props.match.params.id}
            </div>
        );
    }
}
