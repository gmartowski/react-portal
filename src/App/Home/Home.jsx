import React, { Component } from 'react';
import './home.less';
import AppContext from '../AppContext';
import { Portal } from '../../Components/Portal/PortalComponent';
import { Modal } from '../../Components/Modal/ModalComponent';

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
                    context => (
                        <div className="home" onClick={this.handleClicking}>
                            <h1 className="home__title">Home page</h1>

                            <div className="home__content">

                                <div className="home__portal">

                                    <h3>Portal infos</h3>
                                    <label>Number of clicks bubbled from portal: <strong>{clicks}</strong></label>
                                </div>

                                <div className="home__context">

                                    <h3>Context infos</h3>
                                    <div className="home__context-data">
                                        <label>First name: </label>
                                        <strong>{context.firstName}</strong>
                                    </div>

                                    <div className="home__context-data">
                                        <label>Last name: </label>
                                        <strong>{context.lastName}</strong>
                                    </div>

                                    <div className="home__context-data">
                                        <label>Phone number: </label>
                                        <strong>{context.phoneNumber}</strong>
                                    </div>

                                    <div className="home__context-data">
                                        <label>Random kitty image: </label>
                                        <img src={context.randomImgAddress} />
                                    </div>
                                </div>

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
