import React from 'react';
import {useTranslation} from "react-i18next";

const OrderDetailsRow = ({order}) => {
    const{t, i18n} = useTranslation();
    
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
                {order.price} {t("byn")}
            </td>
        </tr>
    );
};

export default OrderDetailsRow;