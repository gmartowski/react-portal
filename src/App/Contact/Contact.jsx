import React from 'react';
import { Clock } from '../../Clock/Clock';
import './contact.less';
import { List } from '../../List/List';
import { Form } from '../../Form/Form';

const numbers = [1, 2, 3, 4, 5];

export const Contact = () => {
    return (
        <div className="contact">
            <h1 className="contact__title">Contact page</h1>
            <Clock />
            <List numbers={numbers} />
            <Form />
        </div>
    );
};
