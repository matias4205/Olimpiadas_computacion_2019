import React from 'react';

const UsersTable = (props) => {
    return (
        <React.Fragment>
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
                            {props.users.map(item => {
                                return (
                                    <tr>
                                        <td>{item.data.firstName}</td>
                                        <td>{item.data.lastName}</td>
                                        <td>{item.data.role}</td>
                                        <td>{item.data.email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UsersTable;