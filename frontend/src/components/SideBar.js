import React from 'react';

import ProfileDataSmall from '../pages/Profile/components/ProfileData_Small';

import profilePhoto from '../assets/images/profile.jpg';

import profileData from '../utils/moks/data_profile.json';

const SideBar = () => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ProfileDataSmall profilePhoto={profilePhoto} firstName={profileData.firstName} lastName={profileData.lastName} role={profileData.role} uid={profileData.uid} />

                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">TOOLS</li>
                    <li className="treeview">
                        <a href="#">
                            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                            {/* <span className="pull-right">
                                <i className="fa fa-circle text-info" />
                            </span> */}
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="/dashboard/quick"><i className="fa fa-rocket"></i>Quick view</a></li>
                            <li><a href="/dashboard/history"><i className="fa fa-history"></i>Historical</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/tasks">
                            <i className="fa fa-tasks"></i>
                            <span>Tasks</span>
                            {/* <span className="pull-right">
                                <i className="fa fa-circle text-info" />
                            </span> */}
                        </a>
                    </li>
                    <li>
                        <a href="/users">
                            <i className="fa fa-user"></i>
                            <span>Manage Users</span>
                            {/* <span className="pull-right">
                                <i className="fa fa-circle text-info" />
                            </span> */}
                        </a>
                    </li>
                </ul>
            </section>
        </aside> 
    );
};

export default SideBar;