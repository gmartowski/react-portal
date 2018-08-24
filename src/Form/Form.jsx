import React, { Component } from 'react';

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        alert(`Submitted${this.state.name}`);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="label">Name: </label>
                    <input name="first-name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        );
    }
}
