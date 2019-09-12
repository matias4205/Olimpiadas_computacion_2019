import React from 'react';

import SectionItem from '../components/SectionItem'

const SectionLayout = (props) => {
    return (
        <React.Fragment>
            {props.data.map((item, index) => {
                return (
                    <SectionItem
                        key={item.id}
                        sectionName={item.id}
                        sectionIndex={index}
                        units={item.units}
                        openEditModal={props.openEditModal}
                        openDeleteModal={props.openDeleteModal}
                    />
                );
            })}
        </React.Fragment>
    );
}

export default SectionLayout;