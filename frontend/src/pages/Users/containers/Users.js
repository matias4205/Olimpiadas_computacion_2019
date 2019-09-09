import React, { Component } from 'react';

import { getUsers } from '../../../utils/api';

import ContentHeader from '../../../components/ContentHeader';
import UsersTable from '../components/UsersTable';
import UsersBadge from '../components/UsersBadge';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            users: [
                {
                    id: 1,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Moran',
                        role: 'administrator',
                        email: 'santimoran@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 2,
                    data: {
                        firstName: 'Matias',
                        lastName: 'Perez',
                        role: 'administrator',
                        email: 'matiasperez@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 3,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                }
            ]
        }
    }

    selectUser = () => {
        
    }

    componentDidMount = async () => {
        try {
            this.setState({ loading: true });
            const { data } = await getUsers();
            this.setState({ loading: false });
        } catch (error) {
            console.log(error);
        }
    }


    render = () => {
        return (
            <React.Fragment>
                <ContentHeader title="Users Management" subtitle="Manage user accounts" />
                <section className="content">
                    <div className="col-md-8">
                        <UsersTable
                            title="Accounts"
                            users={this.state.users}
                        />
                    </div>
                    <div className="col-md-4">
                        <UsersBadge
                            userData={this.state.users[0].data}
                            onClick={() => {}}
                        />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Users;