import React from 'react';

const ProfileData_Big = (props) => {
    return (
        <div className="big-user-panel">
            <div className="pull-left image">
                <img src={props.profilePhoto} className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
                <h1 className="text-black">{`${props.firstName} ${props.lastName}`}</h1>
                <h4><i className="fa fa-circle text-success" style={{ marginRight: 5}}></i>{props.role}</h4>
                <h4 className="text-muted uid">Uid: {props.uid}</h4>
            </div>
        </div>
    );
};

export default ProfileData_Big;