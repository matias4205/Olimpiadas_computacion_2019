import React from 'react';

import Modal from '../../../components/Modal'

import { editDescription } from '../../../utils/api';

//  This <ReactHook> recieves the section, the unit and the description and changes it on the DB
const useSubmitDescription = (props) => {
    const [description, setDescription] = React.useState(null);

    try {
        if (description !== null) {
            editDescription(description.sectionName, description.unitName, description.newDescription)
                .then(() => { props.onSubmit(description.newDescription) });
        }
    } catch (error) {
        console.log(error);
    }

    return [description, setDescription];
}

const EditModal = (props) => {
    //  Obtain this array from the personalized hook created on line 7
    const [description, setDescription] = useSubmitDescription(props);

    const textAreaRef = React.createRef()

    return (
        <Modal
            isOpen={props.isOpen}
            title={props.title}
            onClose={props.onClose}
            onClick={
                async () => {
                    /*
                        Here I set the data I need to pass to the api { sectionName, unitName, newDesctiption }
                        EX : 'B', 'B4', 'A description'
                    */
                    await setDescription({
                        sectionName: props.sectionName,
                        unitName: props.unitName,
                        newDescription: textAreaRef.current.value
                    })
                }}
        >
            <textarea className="form-control" rows="3" ref={textAreaRef} defaultValue={props.description} />
        </Modal>
    );
};

export default EditModal;