import React, { Component } from 'react';
import { Currency } from '../Currency/Currency';
import { Button } from '../Button/Button';
import PropTypes from 'prop-types';

export class Form extends Component {

    static propTypes = {
        isValid: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            quota: 0,
            currency: 'pln',
            firstName: 'Grzegorz',
            lastName: 'Martowski',
            pesel: '88012589589',
            age: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlnChange = this.handlePlnChange.bind(this);
        this.handleEurChange = this.handleEurChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert(`Submitted${this.state.name}`);
        event.preventDefault();
    }

    handlePlnChange(quota) {
        this.setState({ currency: 'pln', quota });
    }

    handleEurChange(quota) {
        this.setState({ currency: 'eur', quota });
    }

    handleChange(event) {
        const { value, name } = event;
        this.setState({ [name]: value });
    }

    render() {
        const { quota, currency } = this.state;
        const eur = currency === 'eur' ? quota : quota * 0.2339;
        const pln = currency === 'pln' ? quota : quota * 4.2734;
        return (
            <form onSubmit={this.handleSubmit}>
                PLN: <Currency quota={pln} onCurrencyChange={this.handlePlnChange} />
                EUR: <Currency quota={eur} onCurrencyChange={this.handleEurChange} />
                <input type="text" value={this.state.age} onChange={this.handleChange} />

                <Button color="#f4568a" width='100px' content="Zapisz" />
                <button className="btn" type="submit">Submit</button>
            </form>
        );
    }
}
