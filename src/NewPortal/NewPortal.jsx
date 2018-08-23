import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalTarget = document.getElementById('portal-target');

export class NewPortal extends Component {
    render(){
        return(
          ReactDOM.createPortal(this.props.children, portalTarget)
        );
    }
}
