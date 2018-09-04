import React, { Component } from 'react';
import 'spectre.css';
import './app.less';

export class App extends Component {

    render() {
        let myArray = [1, 2, 3, 4];
        let result = 0;

        const carBrands = ['Audi', 'Alfa', 'Kia', 'Volvo', 'Seat', 'Honda', 'Saab', 'Nissan'];

        const cars = [
            { name: 'Ford', fuel: 'Petrol' },
            { name: 'Volvo', fuel: 'Diesel' },
            { name: 'Kia', fuel: 'Petrol' },
            { name: 'Ford', fuel: 'Petrol' },
            { name: 'Audi', fuel: 'Diesel' },
            { name: 'Ford', fuel: 'Diesel' }
        ];

        const favouriteCars = [
            { 'name': 'Octavia', 'fuel': 'Petrol', 'engine': '1.8' },
            { 'name': 'Superb', 'fuel': 'Diesel', 'engine': '1.2' },
            { 'name': 'Kodiak', 'fuel': 'Petrol', 'engine': '2.8' },
            { 'name': 'Karoq', 'fuel': 'Petrol', 'engine': '1.8' },
            { 'name': 'Fabia', 'fuel': 'Diesel', 'engine': '0.8' },
            { 'name': 'Rapid', 'fuel': 'Diesel', 'engine': '1.2' }
        ];

        result = cars.filter(function(car) {
            return car.name === 'Ford';
        });
        console
            .log(result);

        // Closures
        var me = 'Bruce Wane';

        function greetMe() {
            console.log(me);
        }

        greetMe();

        // Currying
        let dragon = (name, size, element) =>
            name + ' is a ' +
            size + 'dragon that breathes ' +
            element + '!';

        console.log(dragon('Hungarian Dragon', 'big', 'lightning'));

        let dragonCurry = name => size => element => name + ' is a ' +
            size + 'dragon that breathes ' +
            element + '!';

        console.log(dragonCurry('Hungarian Dragon')('big')('lightning'));

        // Recursion

        let countdownFrom = num => {
            if (num === 0) return;
            console.log(num);
            countdownFrom(num - 1);
        };

        countdownFrom(10);

        return (

            <div className="app">
                <h1>functional programming</h1>
                <h5>Higher Order Functions</h5>
                <div>
                    <ul>
                        <li>map()</li>
                        <li>filter()</li>
                        <li>reject()</li>
                        <li>find()</li>
                        <li>reduce()</li>
                    </ul>
                </div>
                <h5>map()</h5>
                <pre>It's method creates a new array with the results of calling a provided function on every element in the calling array.</pre>
                <hr />
                <div>
                    {
                        result = cars.map((item, index, array) => {
                                return `${item.name} is a ${item.fuel} with index: ${index}`;
                            }
                        )
                    }
                </div>
                <h5>filter()</h5>
                <hr />
                <pre>It's method creates a new array with all elements that pass the test implemented by the provided function.</pre>
                <div>
                    {

                        result = carBrands.filter((car) => car === 'Volvo' || car === 'Saab')
                    }
                </div>
                <h5>reduce()</h5>

                <div>
                    {
                        result = myArray.reduce((acc, val, index) => {
                            console.log(`Accumulator: ${acc}`);
                            <br />;
                            console.log(`Current value: ${val}`);
                            <br />;
                            console.log(`Current index: ${index}`);
                            <br />;
                            return acc * val;
                        }, 1)

                    }
                    {console.log(result)}
                </div>
                <h5>Closures</h5>
                <h5>Currying</h5>
                <h5>Recursion</h5>
                <pre>When the function call itself until it doesnts</pre>
            </div>
        )
            ;
    }
}
