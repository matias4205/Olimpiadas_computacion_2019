import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    if(!props.isOpen){
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modal-content">
                {props.children}
            </div>
        </div>,
        document.getElementById('delete_modal')
    );
};

export default Modal;