import React from 'react';
import { Link } from 'react-router-dom';

import 'placeholder-loading/dist/css/placeholder-loading.css'
import '../../../components/styles/Layout.css'

const ProfileData_Small = (props) => {
    return (
        // <div className="user-panel">
        //     <Link to={`/profile/${props.uid}`} className="pull-left image">
        //         <img src={props.profilePhoto} className="img-circle" alt="User Image" />
        //     </Link>
        //     <div className="pull-left info">
        //         <p><Link to={`/profile/${props.uid}`} style={{ color: '#fff' }}>{`${props.firstName} ${props.lastName}`}</Link></p>
        //         <h6><i className="fa fa-circle text-success" style={{ marginRight: 4}}></i>{props.role}</h6>
        //     </div>
        // </div>
        <div class="ph-item">
            <div class="ph-col-2">
              <div class="ph-avatar"></div>
            </div>
            <div>
              <div class="ph-row">
                <div class="ph-col-12"></div>
                <div class="ph-col-10"></div>
              </div>
            </div>
        </div>
    );
};

export default ProfileData_Small;