import React, { useEffect } from 'react';

import SideBar from '../components/SideBar'
import Header from '../components/Header';

import * as API from '../utils/api'

const Layout = (props) => {
    const [state, setState] = React.useState({
        userData: {
            "firstName": "",
            "lastName": "",
            "role": "",
            "email": ""
        }
    });

    useEffect(() => {
        (async() => {
            const { data: { data }, status } = await API.getMe();;
            setState({
                userData: data
            });
        })();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <SideBar uid={state.userData._id} firstName={state.userData.firstName} lastName={state.userData.lastName} profilePhoto={state.userData.profilePhoto} role={state.userData.role}/>
            <div className="content-wrapper">
                {props.children}
            </div>
        </React.Fragment>
    );
};

export default Layout;