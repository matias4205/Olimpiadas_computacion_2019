import React from 'react';

import UpdateProfileForm from './UpdateProfileForm';
import UserActivity from './UserActivity';

const UserDataAndConfig = (props) => {
    return (
        <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#activity" data-toggle="tab" aria-expanded="true">Activity</a></li>
                <li class=""><a href="#settings" data-toggle="tab" aria-expanded="false">Settings</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="activity">
                    <UserActivity />
                </div>
                <div class="tab-pane" id="settings">
                    <UpdateProfileForm {...props.updateUserDataForm} onChange={props.onChange} onSubmit={props.onSubmit} />
                </div>
            </div>
        </div>
    );
};

export default UserDataAndConfig;