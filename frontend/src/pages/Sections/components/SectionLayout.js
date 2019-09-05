import React from 'react';

import '../components/section_styles.css';

const Section = (props) => {
    return (
        <React.Fragment>
            <div className="box item">
                <h1 className="box-header no-margin">{props.id}</h1>
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
                                    <tr key={item.id}>
                                        <td className="id">{item.id}</td>
                                        <td>{item.description}</td>
                                        <td className="actions text-center">
                                            <button id={item.id} onClick={ e => { props.openEditModal(e.target.id) } } className="action-button delete">
                                                <i className="ion ion-trash-b"/>
                                            </button>
                                            <button id={item.id} onClick={ e => { props.openDeleteModal(e.target.id) } } className="action-button edit">
                                                <i className="ion ion-android-create"/>
                                            </button>                                            
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