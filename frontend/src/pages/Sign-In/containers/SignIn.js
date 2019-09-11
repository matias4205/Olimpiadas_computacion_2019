import React, { Component } from 'react';

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
        if(this.state.form.email && this.state.form.password){
            try {
                this.setState({ error: '' });
                const { data, status } = await signIn(this.state.form.email, this.state.form.password);
            } catch (error) {
                this.setState({ error: 'Invalid email or password' });
                console.log(error);
            }        
        } else {
            this.setState({ error: 'Each field is required' });
        }
    }

    render() {
        return (
            <SignInLayout
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                onError={this.error}
                formValues={this.state.form}
            />
        );
    }
}

export default SignIn;