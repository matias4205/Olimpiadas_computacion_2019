import React from 'react';

const CompanyInfo = (props) => {
    const { comercialDenomination, ownerCompany, fiscalCode, address } = props.productorData;

    return Object.entries(props.productorData).length ?
        <div className="box box-warning">
            <div className="box-header with-border">
                <h3 className="box-title">Company Info</h3>
            </div>
            <div className="box-body">
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Company name</b>
                        <p className="pull-right">{comercialDenomination}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Company owner</b>
                        <p className="pull-right">{ownerCompany}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Company address</b>
                        <p className="pull-right">{address}</p>
                    </li>
                    <li className="list-group-item">
                        <b>Company fiscal code</b>
                        <p className="pull-right">{fiscalCode}</p>
                    </li>
                </ul>
            </div>
        </div>
    :   <div className="box box-warning">
            <div className="box-header with-border">
                <h3 className="box-title">Company Info</h3>
            </div>
            <div className="ph-item">
                <div className="box-body">
                    <div className="ph-col-4">
                        <div className="ph-picture"></div>
                    </div>
                </div>
            </div>
        </div>
}

export default CompanyInfo;