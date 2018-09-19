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
        //console.log(addToThis.call(obj, 1, 2, 3)); // przyjmuje argumenty po kolei

        // APPLY
        var arry = [1, 2, 3];
        //console.log(addToThis.apply(obj, arry)); // przyjmuje argumenty jako tablicę

        // BIND
        var bound = addToThis.bind(obj);
        // console.log(bound);




        // LEXICAL SCOPE  - is the scope defined at lexing time.
        // function scope of outer function === lexical scope of inner function.




        // Closure -  a function which is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

        function foo() {  // 'scope of foo' aka lexical scope for bar
            var memory = 'hello closure';
            return function bar() {
                //console.log(memory);
            };
        }

        const closure = foo();

        closure();
        for (var i = 0; i < 3; i++) {
            //console.log(i);
        }
        //console.log(i);




        // LEXICAL THIS - Lexical “this” a feature that forces the variable “this” to always point to the object where it is physically located within.
        function getNameFromObject(id, callback) {
            setTimeout(function() {
                callback(1000);
            }, 0);
        }

        var person = {
            id: 1,
            name: 'Grzegorz',
            showPerson: function() {

                getNameFromObject(this.id, function() {
                    // console.log(this.name);
                });

                getNameFromObject(this.id, () => {
                    // console.log('zmieniamy na arrow function: ' + this.name);
                });

                getNameFromObject(this.id, function() {
                    // console.log('lub bindujemy this: ' + this.name);
                }.bind(this));

                var self = this;

                getNameFromObject(this.id, function() {
                    //console.log('lub dodajemy var self = this: ' + self.name);
                });
            }
        };
        person.showPerson();




        // STRICT MODE - helps identify common issues (or “bad” parts) and also helps with “securing” JavaScript.
        // 1. uniemożliwia stosowanie przestarzałych składni języka – rzuca w przypadku ich stosowania błędami,
        // 2. pomyłki traktuje jako błędy, byś mógł je możliwie szybko wykrywać i naprawiać,
        // 3. uniemożliwia stosowania składni zarezerwowanej do zaimplementowania w kolejnych wydaniach ECMAScriptu, aby w przyszłości nasz kod nadal wykonywał się poprawnie.

        // - Przypadkowe zmienne globalne są traktowane jako błąd.
        // - Próba nadpisania nienadpisywalnych obiektów globalnych to błąd
        // - Próba usunięcia nieusuwalnej własności to błąd
        // - Duplikujące się nazwy własności w obiektach to błąd
        // - Argumenty w funkcjach muszą mieć unikalne nazwy.
        // - Niedozwolone jest korzystanie ze składni with
        // - Zabronione jest nadpisywanie eval oraz arguments
        // - Dodano nowe słowa zarezerwowane - implements, interface, let, package, private, protected, public, static i yield.



        // SYMBOL
        let symbol1 = Symbol();
        let symbol2 = Symbol('symbol');
        console.log(symbol1, symbol2);



        // AJAX - Asynchronious Javascript and XML
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
