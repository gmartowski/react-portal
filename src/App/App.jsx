import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'spectre.css';
import './app.less';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import { Sidebar } from '../Components/Sidebar/Sidebar';

export class App extends Component {

    render() {
        return (
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
        );
    }
}
