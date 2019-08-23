import React from 'react';

import Breadcrumb from './Breadcrumb';

const ContentHeader = (props) => {
    return (
        <section className="content-header">
            <h1>
                {props.title} {props.subtitle && <small> {props.subtitle} </small>}
            </h1>
            <Breadcrumb />
        </section>
    );
};

export default ContentHeader;