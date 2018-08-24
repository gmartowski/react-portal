import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Loadable } from 'react-loadable';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import 'spectre.css';
import './app.less';
import { Sidebar } from '../Sidebar/Sidebar';

export class App extends Component {

    constructor() {
        super();
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
        console.log('render');
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}
