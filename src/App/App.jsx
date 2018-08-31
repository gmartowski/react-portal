import React, { Component } from 'react';
import 'spectre.css';
import Home from './Home/Home';
import './app.less';
import AppContext from './AppContext';

const themes = {
    light: {
        color: '#A78D65',
        backgroundColor: '#FFF8F0',
        borderColor: '#A78D65'
    },
    dark: {
        color: '#FAB932',
        backgroundColor: '#A78D65',
        borderColor: '#FAB932'
    },
};

export class App extends Component {

    constructor() {
        super();
        this.state = {
            theme: themes.light,
            switchTheme: this.switchTheme
        };
    }

    switchTheme = () => {
        this.setState(state => ({ theme: state.theme === themes.light ? themes.dark : themes.light }));
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Home />
            </AppContext.Provider>
        );
    }
}
