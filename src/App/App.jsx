import React, { Component } from 'react';
import 'spectre.css';
import './app.less';

export class App extends Component {

    render() {
        let myArray = [1, 2, 3, 4];
        let result = 0;

        return (
            <div className="app">
                <h1>functional programming</h1>
                <h2>1. reduce()</h2>
                <div>
                    {
                        result = myArray.reduce((acc, val) => {
                            console.log(`Accumulator: ${acc}`);
                            <br />;
                            console.log(`Current value: ${val}`);
                            <br />;
                            return acc + val;
                        })
                    }
                </div>
            </div>
        );
    }
}
