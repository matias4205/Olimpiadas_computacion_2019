import React from 'react';

import '../../../components/styles/Layout.scss'

const UsersTable = (props) => {
    return !props.loading ?
        <div className="box item">
            <h1 className="box-header no-margin">{props.title}</h1>
            <div className="box-body table-responsive">
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Role</th>
                            <th>Email</th>
                        </tr>
                        {props.users.map((item, index) => {
                            return (
                                <tr key={index} id={index} onClick={() => { props.onClick(index) }}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.role}</td>
                                    <td>{item.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    :
    <div className="box item">
        <h1 className="box-header no-margin">{props.title}</h1>
        <div className="box-body table-responsive">
            <table className="table table-hover">
                <tbody>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                    <td>
                        <div style={{"border": 0}} className="ph-item">
                            <div style={{"padding": 0}} className="ph-col-3">
                                <div className="ph-row data">
                                    <div className="ph-col-12 profile-item_data-item"></div>
                                </div>
                            </div>            
                        </div>
                    </td>
                    <td>
                        <div style={{"border": 0}} className="ph-item">
                            <div style={{"padding": 0}} className="ph-col-3">
                                <div className="ph-row data">
                                    <div className="ph-col-12 profile-item_data-item"></div>
                                </div>
                            </div>            
                        </div>
                    </td>
                    <td>
                        <div style={{"border": 0}} className="ph-item">
                            <div style={{"padding": 0}} className="ph-col-3">
                                <div className="ph-row data">
                                    <div className="ph-col-12 profile-item_data-item"></div>
                                </div>
                            </div>            
                        </div>
                    </td>
                    <td>
                        <div style={{"border": 0}} className="ph-item">
                            <div style={{"padding": 0}} className="ph-col-3">
                                <div className="ph-row data">
                                    <div className="ph-col-12 profile-item_data-item"></div>
                                </div>
                            </div>            
                        </div>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
};

export default UsersTable;