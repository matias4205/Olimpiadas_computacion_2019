import React from 'react';

const ProfileData_Big = (props) => {
    return (
        <div className="box box-success">
            <div className="box-body box-rofile">
                <br/>
                <img className="profile-user-img img-responsive img-circle" src={props.profilePhoto} alt="User profile picture"/>
                <br/>
                <h3 className="profile-username text-center">{props.firstName} {props.lastName}</h3>
                <p className="text-muted text-center">Software Engineer</p>
                <br/>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>First name</b>
                        <p className="pull-right">{props.firstName}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Last name</b>
                        <p className="pull-right">{props.lastName}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Role</b>
                        <p className="pull-right">{props.role}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Email</b>
                        <p className="pull-right">{props.email}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileData_Big;