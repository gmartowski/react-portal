import React, { Component } from 'react';
import 'spectre.css';
import './app.less';
import { Modal } from '../Components/Modal/ModalComponent';
import { Portal } from '../Components/Portal/PortalComponent';

export class App extends Component {

    state = {
        clicks: 0,
        showModal: false
    };

    onModalClick = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    };

    handleClicking = () => {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    };

    render() {

        const { clicks, showModal } = this.state;

        return (
            <div className="app" onClick={this.handleClicking}>

                <div className="home__portal">
                    <h3>Portal infos</h3>
                    <label>Number of clicks bubbled from portal: <strong>{clicks}</strong></label>
                </div>

                <button className="btn" onClick={this.onModalClick}>
                    {showModal ? 'Close modal' : 'Show modal'}
                </button>

                <Portal>
                    <Modal
                        toggleModal={this.onModalClick}
                        visibility={showModal}>
                    </Modal>
                </Portal>
            </div>
        );
    }
}
