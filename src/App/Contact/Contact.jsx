import React, { Component } from 'react';
import { Clock } from '../../Clock/Clock';
import './contact.less';
import { List } from '../../List/List';
import { Form } from '../../Form/Form';
import { ToggleRenderProps } from '../../Toggle/ToggleRenderProps';

const numbers = [1, 2, 3, 4, 5];

export class Contact extends Component {
    render() {
        return (

            <div className="contact">
                <h1 className="contact__title">Contact page</h1>
                <Clock />
                <List numbers={numbers} />
                <Form isValid={10} showTitleOfSection={(firstName, lastName, pesel) =>
                    <div>
                        <div>Name: {firstName}</div>
                        <div>LastName: {lastName}</div>
                        <div>PESEL: {pesel}</div>
                    </div>
                } />
                <ToggleRenderProps render={
                    ({ on, toggle }) => (
                        <div>
                            {on && <h1>Show me</h1>}
                            <button onClick={toggle}>Show / Hide</button>
                        </div>
                    )
                } />
            </div>
        );
    };
};

