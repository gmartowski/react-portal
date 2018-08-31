import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {

    render() {
        const { content, styleClassName } = this.props;
        return (
            <div>
                <button className={`btn ${styleClassName}`}
                        onClick={this.props.onClick}>
                    {content}
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    styleClassName: PropTypes.string,
    content: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
