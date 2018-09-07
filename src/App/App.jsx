import React, { Component } from 'react';
import 'spectre.css';
import './app.less';

export class App extends Component {

    componentDidMount() {

        // hoisting();

        // function declaration
        // function hoisting() {
        //     console.log(hoist);
        //
        //     var what = "Variable and function declariations";
        //
        //     console.log('What is hoisted?' + what);
        //
        //     var hoist = 'to lift or raise up';
        //
        //     console.log('Hoist means ' + hoist);
        // }

        // function expression
        var sum = function() {
            console.log(a + b);
        };
        sum();

        var a = 10;
        var b = 5;
    }

    render() {
        return (
            <div className="app">
                <h1>Home page</h1>
                <div>Home content</div>
            </div>
        );
    }
}
