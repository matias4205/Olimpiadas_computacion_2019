import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    if (!props.isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal fade in" style={{ "display": "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button className="close" onClick={props.onClose}>
                            <span area-hidden="true">x</span>
                        </button>
                        <h3 className="modal-title">{props.title}</h3>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-default" onClick={props.onClose}>Cancel</button>
                        <button className={`btn btn-primary ${props.loading ? 'disabled' : ''}`} onClick={props.onClick}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;