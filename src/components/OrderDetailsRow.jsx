import React from 'react';

const OrderDetailsRow = ({order}) => {
    return (
        <tr>
            <td>
                {order.medcTitle}
            </td>
            <td>
                {order.package}
            </td>
            <td>
                {order.amount}
            </td>
            <td>
                {order.price} BYN
            </td>
        </tr>
    );
};

export default OrderDetailsRow;