import React, { Component } from 'react';
import { Currency } from '../Currency/Currency';

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quota: 0,
            currency: 'pln',
            firstName: 'Grzegorz',
            lastName: 'Martowski',
            pesel: '88012589589'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlnChange = this.handlePlnChange.bind(this);
        this.handleEurChange = this.handleEurChange.bind(this);
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

    render() {
        const { quota, currency, firstName, lastName, pesel } = this.state;
        const eur = currency === 'eur' ? quota : quota * 0.2339;
        const pln = currency === 'pln' ? quota : quota * 4.2734;
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.showTitleOfSection(firstName, lastName, pesel)}
                PLN: <Currency quota={pln} onCurrencyChange={this.handlePlnChange} />
                EUR: <Currency quota={eur} onCurrencyChange={this.handleEurChange} />
                <button className="btn" type="submit">Submit</button>
            </form>
        );
    }
}
