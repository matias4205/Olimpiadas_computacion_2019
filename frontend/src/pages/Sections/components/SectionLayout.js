import React, { Component } from 'react';

import '../components/section_styles.css';

const Section = (props) => {
    return (
        <React.Fragment>
            <div className="box item">
                <h1 className="box-header no-margin">{props.stateId}</h1>
                <div className="box-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            {props.units.map(item => {
                                return (
                                    <tr>
                                        <td className="id">{item.id}</td>
                                        <td>{item.description}</td>
                                        <td className="actions text-center">
                                            <button onClick={props.openEditModal} className="action-button delete"><i className="ion ion-trash-b"/></button>
                                            <button onClick={props.openDeleteModal} className="action-button edit"><i className="ion ion-android-create"/></button>                                            
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Section;