import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import 'spectre.css';
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
                            <Sidebar />
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
