import React, { Component } from 'react';
import 'spectre.css';
import './app.less';
import { List } from '../Components/List/List';

export class App extends Component {

    render() {

        const listOfFruits = ['Orange', 'Strawberry', 'Rasberry', 'Coconut', 'Apple', 'Plum', 'Banana'];

        return (
            <List value={listOfFruits} />
        );
    }
}
