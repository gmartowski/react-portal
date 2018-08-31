import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1>About title</h1>
                <div className="about__content">
                    <div>About content</div>
                    <div>{this.props.match.params.id}</div>
                </div>
            </div>
        );
    }
}

export default About;
