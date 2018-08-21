import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ModalComponent extends Component {

    static propTypes = {
        visibility: PropTypes.bool,
        toggleModal: PropTypes.func.isRequired
    };

    render() {
        const { toggleModal, visibility } = this.props;
        return (
            visibility &&
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '500px'
            }}>
                <div style={{
                    background: '#ccc', padding: '20px', width: '100%', display: 'flex',
                    justifyContent: 'center',
                }}>
                    {this.props.children}
                    <button onClick={toggleModal}>Klik</button>
                </div>
            </div>
        );
    }
}
