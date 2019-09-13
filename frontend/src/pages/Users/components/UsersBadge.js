import React from 'react';
import {
    Link
} from 'react-router-dom';

const Badge = (props) => {
    return !props.loading ?
        <div className="box box-primary">
            <div className="box-body box-rofile">
                <br />
                <img className="profile-user-img img-responsive img-circle" src={props.userData.profilePhoto} alt="User profile picture" />
                <br />
                <h3 className="profile-username text-center">{props.userData.firstName} {props.userData.lastName}</h3>
                <p className="text-muted text-center">Software Engineer</p>
                <br />
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
                <Link to={`/profile/${props.userData._id}`} className="btn btn-primary btn-block">
                    <b>Go to profile</b>
                </Link>
            </div>
        </div>
        :
        <div className="box box-primary">
            <div className="ph-item">
                <div className="box-body box-profile">
                    <div className="ph-col-2" style={{ marginBottom: 20 }} >
                        <div className="ph-avatar" style={{ width: 100, margin: 'auto' }} ></div>
                    </div>
                    <div className="ph-row">
                        <div className="ph-col-4 big empty"></div>
                        <div className="ph-col-4 big"></div>
                        <div className="ph-col-4 big empty"></div>
                        <div className="ph-col-4 empty"></div>
                        <div className="ph-col-4"></div>
                        <div className="ph-col-4 empty"></div>
                    </div>
                    <div className="ph-col-4">
                        <div className="ph-picture"></div>
                    </div>
                    <a className="btn btn-primary btn-block disabled">
                        <b>Go to profile</b>
                    </a>
                </div>
            </div>
        </div>
};

export default Badge;