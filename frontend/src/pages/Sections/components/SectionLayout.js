import React, { Component } from 'react';

import '../components/section_styles.css';

const Section = (props) => {
    return (
        <React.Fragment>
            <div className="col-md-6">
                <div className="box">
                    <h1 className="box-header with-border no-margin">{props.stateId}</h1>
                    <div className="box-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Unit</th>
                                    <th>Description</th>
                                    <th></th>
                                </tr>
                                {props.units.map(index => {
                                    return (
                                        <tr>
                                            <td className="id">{index.id}</td>
                                            <td>{index.description}</td>
                                            <td className="actions">
                                                <button>DELETE</button>
                                                <button>EDIT</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Section;