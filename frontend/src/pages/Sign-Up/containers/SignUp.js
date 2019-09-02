import React, { Component } from 'react';

import SignUpLayout from '../components/SignUpLayout';

import { signUp } from '../../../utils/api';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                matchPasswords: '',
                validEmail: '',
                firstNameRegex: '',
                lastNameRegex: '',
                fiscalCodeTrim: '',
                required: ''
            },
            form: {
                personal: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                },
                company: {
                    comercialDenomination: '',
                    ownerCompany: '',
                    fiscalCode: '',
                    address: ''
                }
            }
        }
    }

    handleChange = async e => {
        if (e.target.name === 'address' || e.target.name === 'fiscalCode' || e.target.name === 'ownerCompany' || e.target.name === 'comercialDenomination') {
            await this.setState({
                form: {
                    ...this.state.form,
                    company: {
                        ...this.state.form.company,
                        [e.target.name]: e.target.value
                    }
                },
            });
        } else {
            await this.setState({
                form: {
                    ...this.state.form,
                    personal: {
                        ...this.state.form.personal,
                        [e.target.name]: e.target.value
                    }
                },
            });
        }
        this.checkErrors();
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(this.checkErrors() === false && this.emptyInputs() === false){
            try {
                const { data, status } = await signUp(this.state.form);
            } catch (error) {
                console.log(error);
            }
        }
    }

    checkErrors = () => {
        let errors = false;

        if(this.state.form.personal.confirmPassword !== this.state.form.personal.password){
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    matchPasswords: 'Passwords doesn´t match',
                }
            });
            errors = true;
        } else {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    matchPasswords: '',
                }
            });
        }

        if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.form.personal.email) === false && this.state.form.personal.email){
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    validEmail: 'Please enter a valid email address',
                }
            });
            errors = true;
        } else {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    validEmail: '',
                }
            });
        }

        if(/^ *$/.test(this.state.form.company.fiscalCode)){
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    fiscalCodeTrim: 'Please enter a valid fiscal code',
                }
            });
            errors = true;
        } else {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    fiscalCodeTrim: '',
                }
            });
        }

        if(/^[a-zA-Z ]+$/.test(this.state.form.personal.firstName) === false && this.state.form.personal.firstName){
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    firstNameRegex: 'This field can not contain numbers nor symbols',
                }
            });
            errors = true;
        } else {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    firstNameRegex: '',
                }
            });
        }

        if(/^[a-zA-Z ]+$/.test(this.state.form.personal.lastName) === false && this.state.form.personal.lastName){
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    lastNameRegex: 'This field can not contain numbers nor symbols',
                }
            });
            errors = true;
        } else {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    lastNameRegex: '',
                }
            });
        }

        return errors;
    }

    emptyInputs = () => {
        if( !this.state.form.company.address || !this.state.form.company.comercialDenomination || !this.state.form.company.fiscalCode || !this.state.form.company.ownerCompany || !this.state.form.personal.firstName || !this.state.form.personal.lastName || !this.state.form.personal.email || !this.state.form.personal.password || !this.state.form.personal.confirmPassword ){
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    required: 'You must fill each field',
                }
            });
            return true;
        } else {
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    required: '',
                }
            });
            return false;
        }
    }

    render = () => {
        return (
            <React.Fragment>
                <SignUpLayout
                    onChange={this.handleChange}
                    formValues={this.state.form}
                    onSubmit={this.handleSubmit}
                    onError={this.state.formErrors}
                />
            </React.Fragment>
        );
    }
}

export default SignUp;