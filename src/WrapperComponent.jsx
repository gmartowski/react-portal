import React from 'react';
import PropTypes from 'prop-types';
import './wrapper.css';
import { ModalComponent } from './ModalComponent';
import { PortalComponent } from './PortalComponent';
import { FormComponent } from './FormComponent';

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
                <FormComponent></FormComponent>
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
