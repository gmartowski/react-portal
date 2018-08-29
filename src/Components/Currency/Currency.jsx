import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Currency extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { target: { value } } = event;
        this.props.onCurrencyChange(value);
    };

    render() {
        const { quota } = this.props;

        return (
            <div>
                <div className="currency">
                    <input name="quota" value={quota} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

PropTypes.propTypes = {
    quota: PropTypes.number,
    onCurrencyChange: PropTypes.func.isRequired
};

PropTypes.defaultProps = {
    quota: 0
};
