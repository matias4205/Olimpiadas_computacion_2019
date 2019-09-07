import React from 'react';

import UnitItem from './UnitItem'

const SectionItem = (props) => {
    return (
        <React.Fragment>
            <div className="box item">
                <h1 className="box-header no-margin">{props.sectionName}</h1>
                <div className="box-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Unit</th>
                                <th>Description</th>
                                <th className="text-center">Actions</th>
                            </tr>
                            {props.units.map((unit, unitIndex) => {
                                return (
                                    <UnitItem key={unit.id} unitName={unit.id} description={unit.description}>
                                        <button onClick={() => { props.openDeleteModal(props.sectionName, props.sectionIndex, unit.id, unitIndex) }} className="action-button delete">
                                            <i className="ion ion-trash-b" />
                                        </button>
                                        <button onClick={() => { props.openEditModal(props.sectionName, props.sectionIndex, unit.id, unitIndex) }} className="action-button edit">
                                            <i className="ion ion-android-create" />
                                        </button>
                                    </UnitItem>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SectionItem;