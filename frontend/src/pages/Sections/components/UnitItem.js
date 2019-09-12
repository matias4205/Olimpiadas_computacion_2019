import React from 'react';

const UnitItem = (props) => {
    return (
        <tr>
            <td className="id">{props.unitName}</td>
            <td>{props.description}</td>
            <td className="actions text-center">
                { props.children }
            </td>
        </tr>
    );
};

export default UnitItem;