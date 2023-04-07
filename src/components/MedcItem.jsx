import Dose from "./Dose";

const MedcItem = ({medc}) => {
    
    return (
        <div className="medicine">
            <table className="medcTitle">
                <tbody>
                    <tr>
                        <td className="name">
                            <strong>{medc.title}</strong>
                            <div className="producer">Was produced by "{medc.producer.company}", {medc.producer.country}</div>
                        </td>
                        <td className="notes">{medc.body}</td>
                        <td className="prescription">
                            <strong>{medc.needPrescription ? 'Prescription needed' : 'No prescription needed'}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="medcInfo">
                <tbody>
                    {medc.doses.map(dose => <Dose key={dose.id} dose={dose}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default MedcItem;