import React, { Component } from 'react';

import ProfileDataBig from '../components/ProfileData_Big';
import ContentHeader from '../../../components/ContentHeader';
import CompanyInfo from '../components/CompanyInfo';

import './styles/Profile.css'

import profilePhoto from '../../../assets/images/profile.jpg';
import profileData from '../../../utils/moks/data_profile.json';

class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <ContentHeader title="Profile" subtitle="Profile data" />
                <section className="content">
                    <div className="container-fluid">
                        <ProfileDataBig profilePhoto={profilePhoto} firstName={profileData.firstName} lastName={profileData.lastName} role={profileData.role} uid={profileData.uid} />
                        <CompanyInfo companyName="Avicorp" comercialDenomination="Avicorp Inc" fiscalCode="skd9k1kdla83" address="Calabozo 2421" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Profile;