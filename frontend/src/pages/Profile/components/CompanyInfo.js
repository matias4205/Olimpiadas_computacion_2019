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
                <div className="container row" style={{ width: '100%' }}>
                    <div className="col-md-12">
                        <div className="form-group row">
                            <h4 className="col-form-label col-sm-2" htmlFor="companyName"><strong>Company Name: </strong></h4>
                            <div className="col-sm-10">
                                <h4 id="companyName">{props.companyName}</h4>
                            </div>
                        </div>
                        <div className="form-group row">
                            <h4 className="col-form-label col-sm-2" htmlFor="companyName"><strong>Comercial Denomination: </strong></h4>
                            <div className="col-sm-10">
                                <h4 id="companyName">{props.comercialDenomination}</h4>
                            </div>
                        </div>
                        <div className="form-group row">
                            <h4 className="col-form-label col-sm-2" htmlFor="companyName"><strong>Address: </strong></h4>
                            <div className="col-sm-10">
                                <h4 id="companyName">{props.address}</h4>
                            </div>
                        </div>
                        <div className="form-group row">
                            <h4 className="col-form-label col-sm-2" htmlFor="companyName"><strong>Fiscal Code: </strong></h4>
                            <div className="col-sm-10">
                                <h4 id="companyName">{props.fiscalCode}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;