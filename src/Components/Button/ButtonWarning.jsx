import React, { Component } from 'react';
import './button.less';

export function buttonWarning(WrappedComponent) {

    return class ButtonWarning extends Component {

        onClick = () => {
            alert('Warning alert');
            this.props.onClick();
        };

        render() {
            return <WrappedComponent {...this.props} styleClassName="warning" onClick={this.onClick} />;
        }
    };
}
