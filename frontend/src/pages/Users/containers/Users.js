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
                },
                {
                    id: 4,
                    data: {
                        firstName: 'Federico',
                        lastName: 'Keller',
                        role: 'user',
                        email: 'fedekeller@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 5,
                    data: {
                        firstName: 'El',
                        lastName: 'Jali',
                        role: 'god',
                        email: 'godog@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 6,
                    data: {
                        firstName: 'John',
                        lastName: 'Doe',
                        role: 'capitalism',
                        email: 'johndoe@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 7,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 8,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 9,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 10,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 11,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 12,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 13,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 14,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 15,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 16,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 17,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 18,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 19,
                    data: {
                        firstName: 'Santiago',
                        lastName: 'Almiron',
                        role: 'user',
                        email: 'santiagoalmiron@test.com',
                        password: 'test'
                    }
                },
                {
                    id: 20,
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

    selectUser = id => {
        this.setState({
            userIndex: id
        });
    }

    componentDidMount = async () => {
        try {
            this.setState({ loading: true });
            const { data } = await getUsers();
            this.setState({ 
                loading: false,
                users: data
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