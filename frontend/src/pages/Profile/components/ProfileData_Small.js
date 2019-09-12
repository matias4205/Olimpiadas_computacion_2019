import React from 'react';
import { Link } from 'react-router-dom';

import '../../../components/styles/Layout.scss'

const ProfileData_Small = (props) => {
    return props.uid ?
      <div className="user-panel">
          <Link to={`/profile/${props.uid}`} className="pull-left image">
              <img src={props.profilePhoto} className="img-circle" alt="User Image" />
          </Link>
          <div className="pull-left info">
              <p><Link to={`/profile/${props.uid}`} style={{ color: '#fff' }}>{`${props.firstName} ${props.lastName}`}</Link></p>
              <h6 className="info-role"><i className="fa fa-circle text-success" style={{ marginRight: 4}}></i>{props.role}</h6>
          </div>
      </div>
    :
      <div className="ph-item profile-item">
          <div className="ph-col-2">
            <div className="ph-avatar"></div>
          </div>
          <div className="ph-col-9">
            <div className="ph-row profile-item_data">
              <div className="ph-col-12 profile-item_data-item"></div>
              <div className="ph-col-10 profile-item_data-item"></div>
            </div>
          </div>
      </div>
};

export default ProfileData_Small;