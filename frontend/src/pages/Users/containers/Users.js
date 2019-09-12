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
            loading: true,
            users: [
                {
                    id: undefined,
                    firstName: '',
                    lastName: '',
                    role: '',
                    email: ''
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
                                loading={this.state.loading}
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