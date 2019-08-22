import React from 'react';

const ProfileData_Small = (props) => {
    return (
        <div className="user-panel">
            <a href={`/profile/${props.uid}`} className="pull-left image">
                <img src={props.profilePhoto} className="img-circle" alt="User Image" />
            </a>
            <div className="pull-left info">
                <p><a href={`/profile/${props.uid}`} style={{ color: '#fff' }}>{`${props.firstName} ${props.lastName}`}</a></p>
                <h6><i className="fa fa-circle text-success" style={{ marginRight: 4}}></i>{props.role}</h6>
            </div>
        </div>
    );
};

export default ProfileData_Small;