import React from 'react';

const CompanyInfo = (props) => {
    return (
        <div className="box">
            <div className="box-header with-border">
                <h3 className="box-title">Company Info</h3>

                <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse">
                        <i className="fa fa-minus" />
                    </button>
                </div>
            </div>
            <div className="box-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="control-label" htmlFor="companyName">Company Name</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;