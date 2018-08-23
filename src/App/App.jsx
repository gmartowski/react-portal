import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'spectre.css';
import './app.less';
import Header from './Header/Header';
import { Home } from './Home/Home';
import { Contact } from './Contact/Contact';
import { About } from './About/About';
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
                <Header />
                <Router>
                    <div className="app">
                        <Sidebar />
                        <Route exact path="/" component={Home} />
                        <Route path="/about/:id" component={About} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </Router>
            </Fragment>
        );
    }
}
