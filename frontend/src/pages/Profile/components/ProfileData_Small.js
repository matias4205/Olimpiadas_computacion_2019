import React from 'react';
import { Link } from 'react-router-dom';

const ProfileData_Small = (props) => {
    return (
        <div className="user-panel">
            <Link to={`/profile/${props.uid}`} className="pull-left image">
                <img src={props.profilePhoto} className="img-circle" alt="User Image" />
            </Link>
            <div className="pull-left info">
                <p><Link to={`/profile/${props.uid}`} style={{ color: '#fff' }}>{`${props.firstName} ${props.lastName}`}</Link></p>
                <h6><i className="fa fa-circle text-success" style={{ marginRight: 4}}></i>{props.role}</h6>
            </div>
        </div>
    );
};

export default ProfileData_Small;