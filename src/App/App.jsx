import React, { Component } from 'react';
import 'spectre.css';
import './app.less';

export class App extends Component {

    componentDidMount() {

        document.querySelector('.bubble').addEventListener('click', function(e) {
            e.target.classList.toggle('redtext');
            console.log('bubble');
        });

        document.getElementById('bubble1').addEventListener('click', function(event) {
            event.target.classList.toggle('redtext');
            console.log('bubble1');
        });
        document.getElementById('bubble2').addEventListener('click', function(event) {
            event.target.classList.toggle('redtext');
            console.log('bubble2');
        });
        document.getElementById('bubble3').addEventListener('click', function(event) {
            event.target.classList.toggle('redtext');
            console.log('bubble3');
        });
        document.getElementById('bubble4').addEventListener('click', function(event) {
            event.target.classList.toggle('redtext');
            console.log('bubble4');
        });
    }

    render() {
        return (
            <div className="app">
                <h1>Home page</h1>
                <div>Home content</div>
                <div class="bubble">
                    <ul>
                        <li id="bubble1">Bubble 1</li>
                        <li id="bubble2">Bubble 2</li>
                        <li id="bubble3">Bubble 3</li>
                        <li id="bubble4">Bubble 4</li>
                    </ul>
                </div>
            </div>
        );
    }
}
