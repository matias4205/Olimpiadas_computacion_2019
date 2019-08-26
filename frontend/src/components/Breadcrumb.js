import React from 'react';
import { Route, Link } from 'react-router-dom';

const BreadcrumbItem = (props) => {
    return(
        <li><Link to={props.path}><i className={props.icon}></i> {props.name}</Link></li>
    );
}

const routes = [
    {
        path: '/dashboard',
        icon: 'fa fa-dashboard',
        name: 'Dashboard'
    },
    {
        path: '/dashboard/quick',
        icon: 'fa fa-rocket',
        name: 'Quick View'
    },
    {
        path: '/dashboard/history',
        icon: 'fa fa-history',
        name: 'Historical'
    },
    {
        path: '/tasks',
        icon: 'fa fa-tasks',
        name: 'Tasks'
    },
    {
        path: '/users',
        icon: 'fa fa-user',
        name: 'Users Management'
    },
    {
        path: '/profile',
        icon: 'fa fa-user',
        name: 'Profile'
    },
    {
        path: '/sections',
        icon: 'fa fa-pencil',
        name: 'Sections Management'
    }
]

const Breadcrumb = () => {
    return (
        <ol className="breadcrumb">
            {routes.map((route)=>{
                return(
                    <Route path={route.path} render={()=> <BreadcrumbItem path={route.path} icon={route.icon} name={route.name} /> } />
                )
            })}
        </ol>
    );
};

export default Breadcrumb;