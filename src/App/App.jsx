import React, { Component } from 'react';
import './app.less';
import 'spectre.css';
import { List } from '../Components/List/List';

export class App extends Component {

    render() {

        const listOfFruits = ['Orange', 'Strawberry', 'Rasberry', 'Coconut', 'Apple', 'Plum', 'Banana'];

        return (
            <List numbers={listOfFruits} />
        );
    }
}
