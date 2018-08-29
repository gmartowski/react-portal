import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
    render() {
        const { color, width, content } = this.props;
        return (
            <div>
                <button style={{ backgroundColor: { color }, width: { width } }}>{content}</button>
            </div>
        );
    }
}

Button.propTypes = {
    color: PropTypes.string,
    width: PropTypes.string,
    content: PropTypes.string
};
