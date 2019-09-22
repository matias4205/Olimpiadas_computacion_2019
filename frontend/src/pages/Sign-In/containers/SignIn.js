import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignInLayout from '../components/SignInLayout';

import { signIn } from '../../../utils/api';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            form: {
                email: '',
                password: ''
            },
            logged: false
        };
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if (this.state.form.email && this.state.form.password) {
            try {
                this.setState({ error: '' });
                const { data, status } = await signIn(this.state.form.email, this.state.form.password);
                if (status === 200) {
                    await this.setState({
                        logged: true
                    })
                } else {
                    await this.setState({
                        error: 'Email or password invalid'
                    });
                }
            } catch (error) {
                await this.setState({ error: 'Invalid email or password' });
                console.log(error);
            }
        } else {
            await this.setState({ error: 'Each field is required' });
        }
    }

    render() {
        return this.state.logged ?
            <Redirect to="/" />
            : <SignInLayout
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onError={this.state.error}
                formValues={this.state.form}
            />
    }
}

export default SignIn;