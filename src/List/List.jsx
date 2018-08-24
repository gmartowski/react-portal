import React from 'react';

export const List = props => {

    const itemsList = props.numbers.map((number) => <li key={number.toString()}>{number}</li>);

    return (
        <ul>{itemsList}</ul>
    );
};
