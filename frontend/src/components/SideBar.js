import React from 'react';
import { Link } from 'react-router-dom';

import ProfileDataSmall from '../pages/Profile/components/ProfileData_Small';

// import profilePhoto from '../assets/images/profile.jpg';

import profileData from '../utils/moks/data_profile.json';
const profilePhoto = null;

const SideBar = (props) => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <ProfileDataSmall profilePhoto={profilePhoto} firstName={props.firstName} lastName={props.lastName} role={props.role} uid={props.uid} />

                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">TOOLS</li>
                    <li className="treeview">
                        <Link to={'/'}>
                            <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                            {/* <span className="pull-right">
                                <i className="fa fa-circle text-info" />
                            </span> */}
                        </Link>
                        <ul className="treeview-menu">
                            <li><Link to="/dashboard/quick"><i className="fa fa-rocket"></i>Quick view</Link></li>
                            <li><Link to="/dashboard/history"><i className="fa fa-history"></i>Historical</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/tasks">
                            <i className="fa fa-tasks"></i>
                            <span>Tasks</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sections">
                            <i className="fa fa-pencil"></i>
                            <span>Manage Sections</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/users">
                            <i className="fa fa-user"></i>
                            <span>Manage Users</span>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside> 
    );
};

export default SideBar;