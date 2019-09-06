import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/general.css';
import './styles/styles.css';

const SignUpLayout = (props) => {
    return (
        <div className="full-height-container login-container">
            <div className="login-box no-margin login">
                <div className="register-logo">
                    <p className="text-white">Register</p>
                </div>
                <form action="../../index.html" method="post" onSubmit={props.onSubmit}>
                    <div className="login-box-body">
                        <div className="col-lg-6 col-md-6">
                            <p className="login-box-msg">Personal data</p>
                            <div className="form-group has-feedback">
                                <input type="text" name="firstName" value={props.formValues.personal.firstName} className="form-control" placeholder="Full name" onChange={ e => {props.onChange(e.target, 'personal')} }/>
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                                <span className="text-danger">{props.onError.firstNameRegex}</span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" name="lastName" value={props.formValues.personal.lastName} className="form-control" placeholder="Last name" onChange={ e => {props.onChange(e.target, 'personal')} }/>
                                <span className="glyphicon glyphicon-user form-control-feedback"></span>
                                <span className="text-danger">{props.onError.lastNameRegex}</span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="email" name="email" value={props.formValues.personal.email} className="form-control" placeholder="Email" onChange={ e => {props.onChange(e.target, 'personal')} }/>
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                                <span className="text-danger">{props.onError.validEmail}</span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" name="password" value={props.formValues.personal.password} className="form-control" placeholder="Password" onChange={ e => {props.onChange(e.target, 'personal')} }/>
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" name="confirmPassword" value={props.formValues.personal.confirmPassword} className="form-control" placeholder="Retype password" onChange={ e => {props.onChange(e.target, 'personal')} }/>
                                <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                                <span className="text-danger">{props.onError.matchPasswords}</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <p className="login-box-msg">Company data</p>
                            <div className="form-group has-feedback">
                                <input type="text" name="comercialDenomination" value={props.formValues.company.comercialDenomination} className="form-control" placeholder="Comercial denomination" onChange={ e => {props.onChange(e.target, 'company')} }/>
                                <span className="glyphicon form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" name="ownerCompany" value={props.formValues.company.ownerCompany} className="form-control" placeholder="Owner company" onChange={ e => {props.onChange(e.target, 'company')} }/>
                                <span className="glyphicon form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" name="fiscalCode" value={props.formValues.company.fiscalCode} className="form-control" placeholder="Fiscal code" onChange={ e => {props.onChange(e.target, 'company')} }/>
                                <span className="glyphicon form-control-feedback"></span>
                                <span className="text-danger">{props.onError.fiscalCode}</span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="text" name="address" value={props.formValues.company.address} className="form-control" placeholder="Address" onChange={ e => {props.onChange(e.target, 'company')} }/>
                                <span className="glyphicon form-control-feedback"></span>
                                <span className="text-danger">{props.onError.required}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-xs-offset-8">
                                <button type="submit" className="btn btn-primary btn-block btn-flat {props.loading && (glyphicon.spinning)}">Register</button>
                                <Link to="/sign-in" className="text-center">I already have a membership</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default SignUpLayout;