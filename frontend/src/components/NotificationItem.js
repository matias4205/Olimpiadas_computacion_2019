import React from 'react';

const NotificationItem = (props) => {
    return (
        <li>
            <a href="#">
                <i className={`fa ${props.icon} text-${props.color}`}></i>
                {props.message}
            </a>
        </li>
    );
};

export default NotificationItem;