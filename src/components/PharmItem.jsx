import React from 'react';

const PharmItem = ({pharms}) => {
    return (
        <tr className="pharmaciesElements">
            <td className="pharmacyName">
                {pharms.name}
            </td>
            <td className="pharmacyAddress">
                {pharms.address}
            </td>
            <td className="pharmacyWH">
                {pharms.description}
            </td>
            <td className="pharmacyPhNum">
                {pharms.phoneNumber}
            </td>
        </tr>
    );
};

export default PharmItem;