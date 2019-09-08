import React from 'react';

import Modal from '../../../components/Modal'

const DeleteModal = (props) => {
    return (
        <Modal isOpen={props.isOpen} title={props.title} onClose={props.onClose} onClick={props.onClick}>
            Do you really want to delete this unit?
        </Modal>
    );
};

export default DeleteModal;