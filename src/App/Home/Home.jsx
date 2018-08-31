import React, { Component } from 'react';
import './home.less';
import { Portal } from '../../Components/Portal/PortalComponent';
import { Modal } from '../../Components/Modal/ModalComponent';
import AppContext from '../AppContext';

export class Home extends Component {

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
            <AppContext.Consumer>
                {
                    data => (
                        <div className="home" onClick={this.handleClicking}>
                            {data.firstName}<br />
                            {data.lastName}<br />
                            {data.phoneNumber}<br />
                            <h1 className="home__title">Home page</h1>
                            <strong>Number of clicks: {clicks}</strong>
                            <div className="home__content">
                                <Portal>
                                    <Modal
                                        toggleModal={this.onModalClick}
                                        visibility={showModal}>
                                    </Modal>
                                </Portal>
                                <button className="btn" onClick={this.onModalClick}>
                                    {showModal ? 'Close modal' : 'Show modal'}
                                </button>
                            </div>
                        </div>
                    )
                }
            </AppContext.Consumer>
        );
    }
}
