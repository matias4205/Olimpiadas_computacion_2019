import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/general.css';
import '../../Sign-Up/components/styles/styles.css';

const SignInLayout = (props) => {
    return (
        <div className="full-height-container login-container">
            <div className="login-box no-margin login-center">
                <div className="login-logo">
                    <p className="text-white">Sign In</p>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form action="../../index2.html" method="post" onSubmit={props.onSubmit}>
                        <div className="form-group has-feedback">
                            <input type="email" name="email" value={props.formValues.email} className="form-control" placeholder="Email" onChange={props.onChange}/>
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" name="password" value={props.formValues.password} className="form-control" placeholder="Password" onChange={props.onChange}/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <label className="text-danger">{props.onError}</label>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label>
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using Google+</a>
                    </div>
                    <a href="#">I forgot my password</a>
                    <br />
                    <Link to="/sign-up" className="text-center">Register a new membership</Link>
                </div>
            </div>
        </div>
    );
};

export default SignInLayout;