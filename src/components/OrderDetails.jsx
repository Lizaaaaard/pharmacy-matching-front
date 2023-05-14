import React from 'react';
import HistoryTableRow from "./HistoryTableRow";
import OrderDetailsRow from "./OrderDetailsRow";

const OrderDetails = ({booking}) => {
    return (
        <div>
            <table>
                <thead className="orderDetailsHeader">
                <tr>
                    <th>
                        Medicine tittle
                    </th>
                    <th>
                        Package
                    </th>
                    <th>
                        Amount
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
                </thead>
                <tbody className="orderDetailsBody">
                {booking.medcList.map(order => <OrderDetailsRow order={order}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetails;