import React from 'react';

import Modal from '../../../components/Modal'

import { editDescription } from '../../../utils/api';

const useSubmitDescription = (props) => {
    const [description, setDescription] = React.useState(null);

    React.useEffect(() => {
        const submitDescription = async (props) => {
            if (description !== null && description.newDescription !== props.description) {
                try {
                    await editDescription(description.sectionName, description.unitName, description.newDescription);
                    props.onSubmit(description.newDescription);
                } catch (error) {
                    console.log(error);
                }
            }
        }
        submitDescription(props);
        setDescription(null);
    });

    return [description, setDescription];
}

const EditModal = (props) => {
    //  Obtain this array from the personalized hook created on line 8
    const [description, setDescription] = useSubmitDescription(props);

    const textAreaRef = React.createRef()

    return (
        <Modal
            isOpen={props.isOpen}
            title={props.title}
            onClose={props.onClose}
            onClick={
                async () => {
                    await setDescription({
                        sectionName: props.sectionName,
                        unitName: props.unitName,
                        newDescription: textAreaRef.current.value
                    });
                }}
        >
            <textarea className="form-control" rows="3" ref={textAreaRef} defaultValue={props.description} />
        </Modal>
    );
};

export default EditModal;