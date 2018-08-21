import React from 'react';
import PropTypes from 'prop-types';
import './wrapper.css';
import { ModalComponent } from './ModalComponent';
import { PortalComponent } from './PortalComponent';

export class WrapperComponent extends React.Component {

    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string
    };

    state = {
        showModal: false
    };

    onModalClick = () => {
        this.setState({ showModal: !this.state.showModal })
    };

    render() {
        return (
            <div className="wrapper-component">
                <span>Wrapper component, {this.props.children}</span>
                <span>{this.props.id}</span>
                <span>{this.props.name}</span>
                <button className="btn" onClick={this.onModalClick}>Wyświetl modala</button>

                <PortalComponent>
                    <ModalComponent toggleModal={this.onModalClick} visibility={this.state.showModal}>
                        <div>
                            To jest treść modala który się wyświetli
                        </div>
                    </ModalComponent>
                </PortalComponent>
            </div>
        );
    }
}
