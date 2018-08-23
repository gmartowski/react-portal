import React, { Component } from 'react';
import { PortalComponent } from '../../Portal/PortalComponent';
import { ModalComponent } from '../../Modal/ModalComponent';

export class About extends Component {
    state = {
        showModal: false
    };

    onModalClick = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    componentWillReceiveProps() {
        console.log('component will receive props');
    }

    shouldComponentUpdate() {
        console.log('should component update');
        return true;
    }

    componentWillUpdate() {
        console.log('component will update');
    }

    componentDidUpdate() {
        console.log('component will update');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        console.log('render about.jsx');
        return (
            <div className="about">
                <h1>About page</h1>
                {this.props.match.params.id}
                <PortalComponent>
                    <ModalComponent toggleModal={this.onModalClick} visibility={this.state.showModal}>
                        <h1>Tytuł modala </h1>
                        <div>To jest treść modala który się wyświetli przekazana jako children</div>
                    </ModalComponent>
                </PortalComponent>
                <button className="btn" onClick={this.onModalClick}>
                    Wyświetl modal
                </button>
            </div>
        );
    }
}
