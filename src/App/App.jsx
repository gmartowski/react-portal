import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'spectre.css';
import { Home } from './Home/Home';
import './app.less';
import { Sidebar } from '../Components/Sidebar/Sidebar';
import AppContext from './AppContext';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            firstName: 'Grzegorz',
            lastName: 'Martowski',
            phoneNumber: 693881676,
            randomImgAddress: 'https://api.thecatapi.com/v1/images/search?format=src&mime_types=image/gif'
        };
    }

    render() {
        return (
            <AppContext.Provider value={this.state}>
                <Router>
                    <div className="app">
                        <Sidebar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about/:id" component={About} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </div>
                </Router>
            </AppContext.Provider>
        );
    }
}
