import React, { Component } from 'react';

import { getUsers } from '../../../utils/api';

import ContentHeader from '../../../components/ContentHeader';
import UsersTable from '../components/UsersTable';
import UsersBadge from '../components/UsersBadge';

class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            userIndex: undefined,
            loading: false,
            users: [
                {
                    id: 1,
                    firstName: 'Santiago',
                    lastName: 'Moran',
                    role: 'administrator',
                    email: 'santimoran@test.com'
                }
            ]
        }
    }

    selectUser = id => {
        this.setState({
            userIndex: id
        });
    }

    componentDidMount = async () => {
        try {
            this.setState({ loading: true });
            var { data } = await getUsers();
            this.setState({ 
                loading: false,
                users: data.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    render = () => {
        return (
            <React.Fragment>
                <ContentHeader title="Users Management" subtitle="Manage user accounts" />
                <section className="content">
                    <div className="row">
                        <div className="col-md-8">
                            <UsersTable
                                loading={this.state.loading}
                                title="Accounts"
                                users={this.state.users}
                                onClick={this.selectUser}
                            />
                        </div>
                        <div className="col-md-4">
                            <UsersBadge
                                userData={this.state.users[this.state.userIndex || 0]}
                            />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Users;