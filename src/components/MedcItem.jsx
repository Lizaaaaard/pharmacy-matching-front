import Dose from "./Dose";
import {useTranslation} from "react-i18next";

const MedcItem = ({medc}) => {
    const{t, i18n} = useTranslation();
    
    return (
        <div className="medicine">
            <table className="medcTitle">
                <tbody>
                    <tr>
                        <td className="name">
                            <strong>{medc.title}</strong>
                            <div className="producer">{t("wasProdBy")} "{medc.producer.company}", {medc.producer.country}</div>
                        </td>
                        <td className="notes">{medc.body}</td>
                        <td className="prescription">
                            <strong>{medc.needPrescription ? <p>{t("prescrNeeded")}</p> : <p>{t("noPrescrNeeded")}</p>}</strong>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="medcInfo">
                <tbody>
                    {medc.doses.map(dose => <Dose key={dose.id} dose={dose} medc={medc}/>)}
                </tbody>
            </table>
        </div>
    );
};

export default MedcItem;