import React from 'react';

const PharmItem = ({pharms}) => {
    return (
            <div className="pharmacies">
                <table>
                    <tr><th>Pharmacy Name</th><th>Address</th><th>Working Hours</th><th>Phone Number</th></tr>
                    <tbody>
                    <tr>
                        {pharms.map((pharm) => <tr>
                            <td>{pharm.pharmacyName}</td>
                            <td>{pharm.address}</td>
                            <td>{pharm.workingHours}</td>
                            <td>{pharm.phoneNumber}</td>
                        </tr>)
                        }
                    </tr>
                    </tbody>
                </table>
            </div>
    );
};

export default PharmItem;