import React from 'react';

const AvailablePharmaciesList = ({pharmacies, changePharmacy, selected}) => {
    return (
        <div className="availablePharmaciesList">
            {
                pharmacies.map(pharm => 
                    selected.item1 === pharm
                        ?
                        <div onClick={() => changePharmacy(pharm)} className="availablePharmacy selectedPharmacy">{pharm.name}</div>
                        :
                        <div onClick={() => changePharmacy(pharm)} className="availablePharmacy">{pharm.name}</div>
                )
            }
        </div>
    );
};

export default AvailablePharmaciesList;