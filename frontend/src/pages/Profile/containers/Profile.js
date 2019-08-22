import React, { Component } from 'react';

import ProfileDataBig from '../components/ProfileData_Big';
import ContentHeader from '../../../components/ContentHeader';

import profilePhoto from '../../../assets/images/profile.jpg';

import profileData from '../../../utils/moks/data_profile.json';

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Profile" />
                <section className="content">
                    <div className="container-fluid">
                        <ProfileDataBig profilePhoto={profilePhoto} firstName={profileData.firstName} lastName={profileData.lastName} role={profileData.role} uid={profileData.uid} />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Profile;