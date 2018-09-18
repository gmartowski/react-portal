import React, { Component } from 'react';
import 'spectre.css';
import './app.less';

export class App extends Component {

    componentDidMount() {
        var obj = { num: 2 };
        var obj2 = { num: 5 };
        var addToThis = function(a, b, c) {
            return this.num + a + b + c;
        };

        // CALL
        console.log(addToThis.call(obj, 1, 2, 3)); // przyjmuje argumenty po kolei

        // APPLY
        var arry = [1, 2, 3];
        console.log(addToThis.apply(obj, arry)); // przyjmuje argumenty jako tablicę

        // BIND
        var bound = addToThis.bind(obj);
        console.log(bound);
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
