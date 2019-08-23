import React from 'react';

import NotificationItem from './NotificationItem';

const Header = () => {
    return (
        <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini"><b>H</b>Vw</span>
                <span className="logo-lg"><b>Horus</b> Viewer</span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown notifications-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-bell"></i>
                                <span className="label label-success">4</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 4 messages</li>
                                <li>
                                    <ul className="menu">
                                        <NotificationItem icon="fa-warning" color="yellow" message="Sector A5 is running out of water" />
                                        <NotificationItem icon="fa-warning" color="red" message="Sector A5 is out of water!" />
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;