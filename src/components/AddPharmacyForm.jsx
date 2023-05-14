import React, {useContext, useState} from 'react';
import {UserRoleContext} from "../context";

const AddPharmacyForm = ({addPharmacy}) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAddress, setInputAddress] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputPhoneNumber, setInputPhoneNumber] = useState('');
    
    return (
        <div className="addPharmacyForm">
            <h1>Add new pharmacy</h1>
            <input
                type='text'
                placeholder='Pharmacy title'
                value={inputTitle}
                onChange={e => setInputTitle(e.target.value)}
            />
            <input
                type='text'
                placeholder='Address'
                value={inputAddress}
                onChange={e => setInputAddress(e.target.value)}
            />
            <input
                type ='text'
                placeholder='Working hours'
                value={inputDescription}
                onChange={e => setInputDescription(e.target.value)}
            />
            <input
                type ='text'
                placeholder='Phone number'
                value={inputPhoneNumber}
                onChange={e => setInputPhoneNumber(e.target.value)}
            />
            <button onClick={()=> addPharmacy({
                Name: inputTitle,
                Description: inputDescription,
                Address: inputAddress,
                PhoneNumber: inputPhoneNumber
            })}>Add</button>
        </div>
    );
};

export default AddPharmacyForm;