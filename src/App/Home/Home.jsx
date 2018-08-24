import React, { Component } from 'react';
import './home.less';
import { Portal } from '../../Portal/PortalComponent';
import { Modal } from '../../Modal/ModalComponent';

export class Home extends Component {
    state = {
        showModal: false
    };

    onModalClick = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render() {
        return (
            <div className="home">
                <h1 className="home__title">Home page</h1>
                <div className="home__content">
                    <Portal>
                        <Modal toggleModal={this.onModalClick} visibility={this.state.showModal}>
                            <h1>Tytuł modala </h1>
                            <div>To jest treść modala który się wyświetli przekazana jako children</div>
                        </Modal>
                    </Portal>
                    <button className="btn" onClick={this.onModalClick}>
                        Wyświetl modal
                    </button>
                </div>
            </div>
        );
    }
}
