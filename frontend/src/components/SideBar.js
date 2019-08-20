import React from 'react';

import profileData from '../utils/moks/data_profile.json';
const profilePhoto = require('../assets/images/profile.jpg');

const SideBar = () => {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src={ profilePhoto } className="img-circle" alt="User Image" />
                    </div>
                    <div className="pull-left info">
                        <p>{`${profileData.firstName} ${profileData.lastName}`}</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> { profileData.role }</a>
                    </div>
                </div>
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