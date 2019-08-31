import React from 'react';

import ContentHeader from '../../../components/ContentHeader';

const SignInLayout = () => {
    return (
        <React.Fragment>
            <ContentHeader title="Sign in" subtitle="Access to my account" />
                    <div className="col-md-6">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3>Sign in</h3>
                            </div>
                            <div class="box-body">
                                <div class="form-group">
                                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                                    <div class="col-sm-10">
                                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10">
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox"/> Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-info pull-right">Sign in</button>
                            </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignInLayout;