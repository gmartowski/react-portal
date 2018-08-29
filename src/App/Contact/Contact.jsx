import React, { Component } from 'react';
import { Clock } from '../../Components/Clock/Clock';
import './contact.less';
import { List } from '../../Components/List/List';
import { Form } from '../../Components/Form/Form';
import { ToggleRenderProps } from '../../Components/Toggle/ToggleRenderProps';

const numbers = [1, 2, 3, 4, 5];

export class Contact extends Component {
    render() {
        return (

            <div className="contact">
                <h1 className="contact__title">Contact page</h1>

                <h3>Clock component: </h3>
                <Clock />

                <h3>List component: </h3>
                <List numbers={numbers} />

                <h3>Form component</h3>
                <Form isValid={10} />

                <h3>Render prop result: </h3>
                <ToggleRenderProps render={
                    ({ on, toggle }) => on && <h1>Test: {toggle}</h1>}
                />
            </div>
        );
    };
};

