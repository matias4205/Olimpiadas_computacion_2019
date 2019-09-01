import React from 'react';

import SideBar from '../components/SideBar'
import Header from '../components/Header';

const Layout = (props) => {
    if (props.Layout !== false) {
        return (
            <React.Fragment>
                <Header />
                <SideBar />
                <div className="content-wrapper">
                    {props.children}
                </div>
            </React.Fragment>
        );
    }
    else {
        return (
            <React.Fragment>
                {props.children}
                {props.Layout}
            </React.Fragment>
        );
    }
};

export default Layout;