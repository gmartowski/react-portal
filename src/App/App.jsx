import React, { Component } from 'react';
import 'spectre.css';
import './app.less';
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
                        <h1>Tytuł modala</h1>
                        <div>To jest treść modala który się wyświetli przekazana jako children</div>
                    </ModalComponent>
                </PortalComponent>
                <button className="btn" onClick={this.onModalClick}>Wyświetl modal</button>
            </div>
        );
    }
}
