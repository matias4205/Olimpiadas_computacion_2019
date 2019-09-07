import React from 'react';

import Modal from '../../../components/Modal'

const EditModal = (props) => {
    const textAreaRef = React.createRef()

    return (
        <Modal isOpen={ props.isOpen } title={ props.title } onClose={ props.onClose } onClick={ () => { props.onSubmit(textAreaRef.current.value) }}>
            <textarea className="form-control" rows="3" ref={ textAreaRef } defaultValue={props.description} />
        </Modal>
    );
};

export default EditModal;