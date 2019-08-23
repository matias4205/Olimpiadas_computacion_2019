import React from 'react';
import SideBar from '../components/SideBar'
import Header from '../components/Header';

const Layout = (props) => {
    return (
        <div className="content-wrapper">
            <Header />
            <SideBar />
            {props.children}
        </div>
    );
};

export default Layout;