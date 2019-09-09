import React from 'react';
import { Link } from 'react-router-dom';

const Badge = (props) => {
    return (
        <div className="box box-primary">
            <div class="box-body box-rofile">
                <br/>
                <img class="profile-user-img img-responsive img-circle" src="https://adminlte.io/themes/AdminLTE/dist/img/user4-128x128.jpg" alt="User profile picture"/>
                <br/>
                <h3 class="profile-username text-center">{props.userData.firstName} {props.userData.lastName}</h3>
                <p class="text-muted text-center">Software Engineer</p>
                <br/>
                <ul class="list-group list-group-unbordered">
                    <li class="list-group-item">
                        <b>First name</b>
                        <p class="pull-right">{props.userData.firstName}</p>
                    </li>
                    <li class="list-group-item">
                        <b>Last name</b>
                        <p class="pull-right">{props.userData.lastName}</p>
                    </li>
                    <li class="list-group-item">
                        <b>Role</b>
                        <p class="pull-right">{props.userData.role}</p>
                    </li>
                    <li class="list-group-item">
                        <b>Email</b>
                        <p class="pull-right">{props.userData.email}</p>
                    </li>
                </ul>
                <Link to="/profile/5d5de1138e5235add706e616" class="btn btn-primary btn-block">
                    <b>Go to profile</b>
                </Link>
            </div>
        </div>
    );
};

export default Badge;