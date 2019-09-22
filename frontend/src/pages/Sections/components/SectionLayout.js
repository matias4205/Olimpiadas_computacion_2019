import React from 'react';

import SectionItem from '../components/SectionItem'
import SectionsLoader from '../components/SectionsLoader';

const SectionLayout = (props) => {
    return (
        <React.Fragment>
            {!props.loading ?
                props.data.map((item, index) => {
                    return (
                        <SectionItem
                            key={index}
                            sectionName={item.sectionName}
                            sectionIndex={index}
                            units={item.units}
                            openEditModal={props.openEditModal}
                            openDeleteModal={props.openDeleteModal}
                        />
                    );
                })
                :
                <SectionsLoader/>
            }
        </React.Fragment>
    );
}

export default SectionLayout;