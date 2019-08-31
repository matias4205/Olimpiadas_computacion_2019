import React from 'react';

const SignUpLayout = (props) => {
    return (
        <React.Fragment>
            <div className="content">
                <div className="row">
                    <div className="col-md-6">
                       <div className="box box-info">
                            <div className="box-header with-border">
                                <h3>Personal data</h3>
                            </div>
                            <div class="box-body">
                                <div class="form-group">
                                    <label>First name</label>
                                    <input type="text" class="form-control" placeholder="First name"/>
                                </div>
                                <div class="form-group">
                                    <label>Last name</label>
                                    <input type="email" class="form-control" placeholder="Last name"/>                                
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="Password"/>                                
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-info pull-right">Sign in</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="box box-info">
                            <div className="box-header with-border">
                                <h3>Company</h3>
                            </div>
                            <div class="box-body">
                                <div class="form-group">
                                    <label>Comercial denomination</label>
                                    <input type="text" class="form-control" placeholder="Ccial denomination"/>
                                </div>
                                <div class="form-group">
                                    <label>Owner company</label>
                                    <input type="text" class="form-control" placeholder="Owner company"/>
                                </div>
                                <div class="form-group">
                                    <label>Fiscal code</label>                                
                                    <input type="text" class="form-control" placeholder="Fiscal code"/>
                                </div>
                                <div class="form-group">
                                    <label>Address</label>
                                    <input type="text" class="form-control" placeholder="Address"/>
                                </div>
                            </div>
                            <div class="box-footer">
                                <button type="submit" class="btn btn-info pull-right">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUpLayout;