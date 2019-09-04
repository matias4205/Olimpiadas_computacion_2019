import React, { Component } from 'react';

import SignInLayout from '../components/SignInLayout';

import { signIn } from '../../../utils/api';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: ''
            }
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
        try {
            const { data, status } = await signIn(this.state.form.email, this.state.form.password);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <SignInLayout
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
            />
        );
    }
}

export default SignIn;