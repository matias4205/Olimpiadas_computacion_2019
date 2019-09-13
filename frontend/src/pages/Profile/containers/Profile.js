import React, { Component } from 'react';

import ProfileDataBig from '../components/ProfileData_Big';
import ContentHeader from '../../../components/ContentHeader';
import CompanyInfo from '../components/CompanyInfo';
import UserDataAndConfig from '../components/UserDataAndConfig';

import './styles/Profile.scss'

import * as API from '../../../utils/api';

class Profile extends Component {
    state = {
        userData: {},
        productorData: {},
        updateUserDataForm: {}
    }

    submitUpdate = async (e) => {
        e.preventDefault();
        this.setState({
            productorData: {},
            updateUserDataForm: {
                firstName: "",
                lastName: "",
                role: "",
                profilePhoto: "",
                email: ""
            },
            userData: {}
        });
        const { data, status } = await API.updateUser(this.state.updateUserDataForm);
        this.fetchProfileData();
    }

    handleUpdateUserDataForm = ({ target }) => {
        this.setState((prevState)=>{
            return {
                updateUserDataForm: {
                    ...prevState.updateUserDataForm,
                    [target.name]: target.value
                },
            }
        });
    }

    async fetchProfileData(){
        const uid = this.props.match.params.userId;
        const { data: { data: userData } } = uid ? await API.getUser(uid) : await API.getMe();
        delete userData.password;
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

    async componentDidMount(){
        this.fetchProfileData();
    }

    render() {
        const { userData, productorData, updateUserDataForm } = this.state;

        return (
            <React.Fragment>
                <ContentHeader title="Profile" subtitle="Profile data" />
                <section className="content">
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileDataBig userData={userData} />
                            <CompanyInfo productorData={productorData} />
                        </div>
                        <div className="col-md-8">
                            <UserDataAndConfig updateUserDataForm={updateUserDataForm} onChange={this.handleUpdateUserDataForm} onSubmit={this.submitUpdate} />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Profile;