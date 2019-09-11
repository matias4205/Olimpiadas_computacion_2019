import React, { Component } from 'react';

import ProfileDataBig from '../components/ProfileData_Big';
import ContentHeader from '../../../components/ContentHeader';
import CompanyInfo from '../components/CompanyInfo';
import UserDataAndConfig from '../components/UserDataAndConfig';

import './styles/Profile.scss'

import profilePhoto from '../../../assets/images/profile.jpg';
import profileData from '../../../utils/moks/data_profile.json';
import * as API from '../../../utils/api';

class Profile extends Component {
    state = {
        userData: {},
        productorData: {},
        updateUserDataForm: {
            
        }
    }

    handleUpdateUserDataForm = ({ target }) => {
        this.setState({
            updateUserDataForm: {
                [target.name]: target.value
            },
        });
    }

    async componentDidMount(){
        const { data: { data: userData } } = await API.getMe();
        this.setState({
            userData,
            updateUserDataForm:{
                ...userData
            }
        });
        const { data: { data: productorData } } = await API.getProductor();
        this.setState({
            productorData
        });
    }

    render() {
        const { userData, productorData, updateUserDataForm } = this.state;

        return (
            <React.Fragment>
                <ContentHeader title="Profile" subtitle="Profile data" />
                <section className="content">
                    <div className="row">
                        <div className="col-md-3">
                            <ProfileDataBig profilePhoto={userData.profilePhoto} firstName={userData.firstName} lastName={userData.lastName} role={userData.role} uid={userData._id} email={userData.email} />
                            <CompanyInfo companyName={productorData.comercialDenomination} ownerCompany={productorData.ownerCompany} fiscalCode={productorData.fiscalCode} address={productorData.address} />
                        </div>
                        <div className="col-md-9">
                            <UserDataAndConfig updateUserDataForm={updateUserDataForm} />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Profile;