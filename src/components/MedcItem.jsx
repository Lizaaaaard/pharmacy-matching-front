import React, {useState} from 'react';
import Dose from "./Dose";

const MedcItem = (props) => {
    
    return (
        <div className="medicine">
            <table className="medcTitle">
                <tr>
                <td className="name">
                    <strong>{props.medc.title}</strong>
                    <div className="producer">Was produced by "{props.medc.producer.company}", {props.medc.producer.country}</div>
                </td>
                <td className="notes">{props.medc.body}</td>
                <td className="prescription">
                    <strong>{props.medc.needPrescription ? 'Prescription needed' : 'No prescription needed'}</strong>
                </td>
                </tr>
            </table>
            <table className="medcInfo">
                {props.medc.doses.map(dose => <Dose dose={dose}/>)}
            </table>
        </div>
    );
};

export default MedcItem;