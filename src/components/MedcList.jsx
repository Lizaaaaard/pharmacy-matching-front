import React from 'react';
import MedcItem from "./MedcItem";

const MedcList = ({medc, search}) => {
    return (
        <div>
            {medc.filter(med => med.title.toLowerCase().includes(search.toLowerCase()))
                .map(med => <MedcItem medc={med} key={med.id}/>
            )}
        </div>
    );
};

export default MedcList;