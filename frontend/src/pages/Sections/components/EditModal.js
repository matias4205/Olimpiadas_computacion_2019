import React from 'react';

import Modal from '../../../components/Modal'

import { editDescription } from '../../../utils/api';

const useSubmitDescription = async (sectionName, unitName, description) => {
    const [state, setState] = React.useState();

    try {
        await setState({
            sectionName,
            unitName,
            description
        });
        const { data, status } = await editDescription(state);
    } catch (error) {
        console.log(error);
    }
}

const EditModal = (props) => {
    const textAreaRef = React.createRef()

    return (
        <Modal isOpen={props.isOpen} title={props.title} onClose={props.onClose} onClick={async () => {
            await useSubmitDescription(props.title, props.unitName, textAreaRef.current.value)
            props.onSubmit(textAreaRef.current.value)
        }}>
            <textarea className="form-control" rows="3" ref={textAreaRef} defaultValue={props.description} />
        </Modal>
    );
};

export default EditModal;