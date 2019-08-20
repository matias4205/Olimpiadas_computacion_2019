import React from 'react';

const ContentHeader = (props) => {
    return (
        <section className="content-header">
            <h1>
                {props.title} {props.subtitle && <small> {props.subtitle} </small>}
            </h1>
            <ol className="breadcrumb">
                <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                <li className="active">Dashboard</li>
            </ol>
        </section>
    );
};

export default ContentHeader;