import React, { Component } from 'react';

export function ToggleHOC(WrappedComponent) {

    return class ToggleHOC extends Component {

        render() {
            return <WrappedComponent />;
        }
    };
};
