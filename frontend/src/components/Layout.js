import React from 'react';

import SideBar from '../components/SideBar'
import Header from '../components/Header';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <SideBar />
            <div className="content-wrapper">
                <div className="content row">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Layout;