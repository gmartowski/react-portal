import React, { Component } from 'react';
import 'spectre.css';
import './app.less';

export class App extends Component {

    render() {
        let myArray = [1, 2, 3, 4];
        let result = 0;
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
                <h2>Higher Order Functions</h2>
                <div>
                    <ul>
                        <li>map()</li>
                        <li>filter()</li>
                        <li>reject()</li>
                        <li>find()</li>
                        <li>reduce()</li>
                    </ul>
                </div>
                <h2>1. reduce()</h2>
                <div>
                    {
                        result = myArray.reduce((acc, val) => {
                            console.log(`Accumulator: ${acc}`);
                            <br />;
                            console.log(`Current value: ${val}`);
                            <br />;
                            return acc * val;
                        }, 1)

                    }
                    {console.log(result)}
                </div>
                <h2>2. map()</h2>
                <div>
                    {
                        result = cars.map((item, index) => {
                                return `${item.name} is a ${item.fuel}`;
                            }
                        )
                    }
                </div>
                <h2>3. filter()</h2>
                <div>
                    {
                        // result = cars.filter(function(car) {
                        //     return car.name === 'Ford';
                        // })
                    }
                </div>
                <h2>4. Closures</h2>
                <div>

                </div>

                <h2>5. Currying</h2>
                <div>

                </div>
                <h2>6. Recursion</h2>
                <div>
                    When the function call itself until it doesnts

                </div>
            </div>
        )
            ;
    }
}
