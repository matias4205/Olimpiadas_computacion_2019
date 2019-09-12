import React from 'react';

const InfoBox = (props) => {
    return (
        <div className="info-box">
            <span className={`info-box-icon bg-${props.color}`}><i className={props.icon}></i></span>

            <div className="info-box-content">
                <span className="info-box-text">{props.title}</span>
                { props.value !== undefined ? //Initially it is undefined, but if no readings had been averaged it is null so returns true
                    <span className="info-box-number">{ props.value ? props.value + props.unit : 'No readings'}</span> :
                    <div className="loader" />
                }
                <i className="fa fa-info-circle text-muted info-hoverable" style={{ position: 'absolute' }}></i>
            </div>

        </div>
    );
};

export default InfoBox;