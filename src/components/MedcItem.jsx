import React, {useState} from 'react';

const MedcItem = (props) => {
    
    return (
        <div className="medicine">
            <div className="medcTitle"><strong>{props.medc.title}</strong></div>
            <div className="medcInfo">
                <div>
                    {props.medc.body}
                </div>
                <div className="medcButton">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default MedcItem;