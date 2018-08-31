import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loadable } from 'react-loadable';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import 'spectre.css';
import './app.less';
import { Nav } from '../Components/Nav/Nav';
import AppContext from './AppContext';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            firstName: 'Grzegorz',
            lastName: 'Martowski',
            phoneNumber: 693881676
        };
        console.log('constructor');
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        return (
            <Fragment>
                <AppContext.Provider value={this.state}>
                    <Router>
                        <div className="app">
                            <Nav />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/about/:id" component={About} />
                                <Route path="/contact" component={Contact} />
                            </Switch>
                        </div>
                    </Router>
                </AppContext.Provider>
            </Fragment>
        );
    }
}
