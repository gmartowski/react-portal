import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

export class Form extends Component {

    static propTypes = {
        isValid: PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Grzegorz',
            lastName: 'Martowski',
            email: 'kontakt@stabsoft.pl',
            phone: '88012589589'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert(`Submitted ${this.state.firstName}`);
        event.preventDefault();
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    render() {
        const { firstName, lastName, phone, email } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>

                <div className='form-group'>
                    <label>First name: </label>
                    <input type='text' name='firstName' value={firstName} onChange={this.handleChange} />
                </div>

                <div className='form-group'>
                    <label>Last name: </label>
                    <input type='text' name='lastName' value={lastName} onChange={this.handleChange} />
                </div>

                <div className='form-group'>
                    <label>Email name: </label>
                    <input type='text' name='email' value={email} onChange={this.handleChange} />
                </div>

                <div className='form-group'>
                    <label>Phone name: </label>
                    <input type='text' name='phone' value={phone} onChange={this.handleChange} />
                </div>

                <Button onClick={this.handleSubmit} content={'Submit'} />
            </form>
        );
    }
}
