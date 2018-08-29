import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {

    onClick = () => {
        console.log('On click inside Button ');
    };

    render() {
        const { content } = this.props;
        return (
            <div>
                <button className="btn" onClick={this.onClick}>{content}</button>
            </div>
        );
    }
}

Button.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    content: PropTypes.string
};
