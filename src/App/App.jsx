import React, { Component } from 'react';
import 'spectre.css';
import { ModalComponent } from '../Modal/ModalComponent';
import { PortalComponent } from '../Portal/PortalComponent';

export class App extends Component {

    state = {
        showModal: false
    };

    onModalClick = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render() {
        return (
            <div>
                <PortalComponent>
                    <ModalComponent toggleModal={this.onModalClick} visibility={this.state.showModal}>
                        <div>To jest treść modala który się wyświetli</div>
                    </ModalComponent>
                </PortalComponent>
                <button className="btn" onClick={this.onModalClick}>Wyświetl modala</button>
            </div>
        );
    }
}
