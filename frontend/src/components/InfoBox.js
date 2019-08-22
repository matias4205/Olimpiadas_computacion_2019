import React from 'react';

const InfoBox = (props) => {
    return (
        <div className="info-box">
            <span className={`info-box-icon bg-${props.color}`}><i className={props.icon}></i></span>

            <div className="info-box-content">
                <span className="info-box-text">{props.title}</span>
                <span className="info-box-number">{props.value}</span>
                <i className="fa fa-info-circle text-muted info-hoverable" style={{ position: 'absolute' }}></i>
            </div>

        </div>
    );
};

export default InfoBox;