import React from 'react';
import PropTypes from 'prop-types';
import './modal.less';

export const Modal = props => {

    const { toggleModal, visibility } = props;

    return (
        visibility &&
        <div className="modal-component">
            <div className="modal-component__body">
                <h1>Modal title</h1>
                <div>It works !</div>
                <button className="btn">Click and do nuffin'</button>
                <button className="btn" onClick={toggleModal}>Close</button>
            </div>
        </div>
    );
};

PropTypes.propTypes = {
    visibility: PropTypes.bool,
    toggleModal: PropTypes.func.isRequired
};
