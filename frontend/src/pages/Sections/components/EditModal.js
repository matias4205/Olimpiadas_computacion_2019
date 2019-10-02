import React from 'react';

import Modal from '../../../components/Modal'

import { editDescription } from '../../../utils/api';

const useSubmitDescription = props => {
    const [description, setDescription] = React.useState(false);

    if (description !== false) {
        editDescription(description.sectionName, description.unitName, description.newDescription)
            .then(props.onSubmit(description.newDescription))
            .then(setDescription(false))
            .catch(error => console.log(error));
    }

    return [description, setDescription];
}

const EditModal = props => {
    //  Obtain this array from the personalized hook created on line 7
    const [description, setDescription] = useSubmitDescription(props);

    const textAreaRef = React.createRef()

    return (
        <Modal
            loading={description.loading}
            isOpen={props.isOpen}
            title={props.title}
            onClose={props.onClose}
            onClick={
                async () => {
                    await setDescription({
                        sectionName: props.sectionName,
                        unitName: props.unitName,
                        newDescription: textAreaRef.current.value,
                        loading: true
                    });
                }}
        >
            <textarea className="form-control" rows="3" ref={textAreaRef} defaultValue={props.description} />
        </Modal>
    );
};

export default EditModal;