import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.less';

export class Modal extends Component {

    static propTypes = {
        visibility: PropTypes.bool,
        toggleModal: PropTypes.func.isRequired
    };

    render() {
        const { toggleModal, visibility } = this.props;
        return (
            visibility &&
            <div className="modal-component">
                <div className="modal-component__body">
                    {this.props.children}
                    <button className="btn" onClick={toggleModal}>Zamknij</button>
                </div>
            </div>
        );
    }
}
