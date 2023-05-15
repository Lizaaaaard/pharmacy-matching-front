import React, {useState} from 'react';
import AllOrdersList from "../components/AllOrdersList";

const ManageOrders = () => {    
    return (
        <div className="manageOrders">
            <div>
                <h1>All users orders</h1>
                <AllOrdersList/>
            </div>
        </div>
    );
};

export default ManageOrders;