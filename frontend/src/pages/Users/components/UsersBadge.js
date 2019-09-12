import React from 'react';
import {
    Link
} from 'react-router-dom';

const Badge = (props) => {
    return (
        <div className="box box-primary">
            <div className="box-body box-rofile">
                <br/>
                <img className="profile-user-img img-responsive img-circle" src="https://adminlte.io/themes/AdminLTE/dist/img/user4-128x128.jpg" alt="User profile picture"/>
                <br/>
                <h3 className="profile-username text-center">{props.userData.firstName} {props.userData.lastName}</h3>
                <p className="text-muted text-center">Software Engineer</p>
                <br/>
                <ul className="list-group list-group-unbordered">
                    <li className="list-group-item">
                        <b>First name</b>
                        <p className="pull-right">{props.userData.firstName}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Last name</b>
                        <p className="pull-right">{props.userData.lastName}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Role</b>
                        <p className="pull-right info-role">{props.userData.role}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Email</b>
                        <p className="pull-right">{props.userData.email}</p>
                    </li>
                </ul>
                <Link to={`/profile/${props.userData.id}`} className="btn btn-primary btn-block">
                    <b>Go to profile</b>
                </Link>
            </div>
        </div>
    );
};

export default Badge;