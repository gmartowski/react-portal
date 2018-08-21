import React, { Component, Fragment } from 'react';
import { WrapperComponent } from './WrapperComponent';
import logo from './logo.svg';
import './App.css';
import 'spectre.css';

export class App extends Component {

    state = {
        id: 0,
        name: 'Grzegorz Martowski'
    };

    render() {
        const { id, name } = this.state;
        return (
            <Fragment>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
                <WrapperComponent id={id} name={name}>
                    <h1>Title children</h1>
                    <div>Children component</div>
                </WrapperComponent>
            </Fragment>
        );
    }
}
