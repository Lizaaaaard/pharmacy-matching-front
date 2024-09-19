import React from 'react';
import HistoryTableRow from "./HistoryTableRow";
import OrderDetailsRow from "./OrderDetailsRow";
import {useTranslation} from "react-i18next";

const OrderDetails = ({booking}) => {
    const {t, i18n} = useTranslation();
    
    return (
        <div>
            <table>
                <thead className="orderDetailsHeader">
                <tr>
                    <th>
                        {t("medicineTitle")}
                    </th>
                    <th>
                        {t("package")}
                    </th>
                    <th>
                        {t("amount")}
                    </th>
                    <th>
                        {t("price")}
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