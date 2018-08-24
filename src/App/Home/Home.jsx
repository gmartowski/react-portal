import React, { Component } from 'react';
import './home.less';
import { Portal } from '../../Portal/PortalComponent';
import { Modal } from '../../Modal/ModalComponent';

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            showModal: false
        };
        this.handleClicking = this.handleClicking.bind(this);
    }

    onModalClick = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    handleClicking() {
        this.setState(prevState => ({
            clicks: prevState.clicks + 1
        }));
    }

    render() {
        return (
            <div className="home" onClick={this.handleClicking}>
                <h1 className="home__title">Home page</h1>
                <strong>Number of clicks: {this.state.clicks}</strong>
                <div className="home__content">
                    <Portal>
                        <Modal toggleModal={this.onModalClick} visibility={this.state.showModal}>
                            <h1>Modal title</h1>
                            <div>It works !</div>
                        </Modal>
                    </Portal>
                    <button className="btn" onClick={this.onModalClick}>Show modal</button>
                </div>
            </div>
        );
    }
}
