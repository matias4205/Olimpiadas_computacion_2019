import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/styles/general.css';
import './styles/styles.css';

const SignUpLayout = (props) => {
    return (
        <div className="full-height-container login-container">
            <div className="login-box no-margin">
                <div className="register-logo">
                   <p className="text-white">Register</p>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form action="../../index.html" method="post">
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" placeholder="Full name" />
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Retype password" />
                            <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
                        </div>
                    </form>
                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign up using Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign up using Google+</a>
                    </div>
                    <Link to="/sign-in" className="text-center">I already have a membership</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpLayout;