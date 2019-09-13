import React from 'react';

import UpdateProfileForm from './UpdateProfileForm';
import UserActivity from './UserActivity';

const UserDataAndConfig = (props) => {
    return (
        <div className="nav-tabs-custom">
            <ul className="nav nav-tabs">
                <li className="active"><a href="#activity" data-toggle="tab" aria-expanded="true">Activity</a></li>
                <li className=""><a href="#settings" data-toggle="tab" aria-expanded="false">Settings</a></li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="activity">
                    <UserActivity />
                </div>
                <div className="tab-pane" id="settings">
                    <UpdateProfileForm updateUserDataForm={props.updateUserDataForm} onChange={props.onChange} onSubmit={props.onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default UserDataAndConfig;