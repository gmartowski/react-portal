import React, { Component } from 'react';

export class ToggleRenderProps extends Component {

    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            on: false
        };
    }

    toggle() {
        this.setState({ on: !this.state.on });
    }

    render() {
        const { render } = this.props;
        const { on } = this.state;
        return (
            <div>
                {render({ on, toggle: this.toggle })}
            </div>
        );
    }
}
