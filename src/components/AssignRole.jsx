import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import RolesService from "../API/RolesService";
import Select from 'react-select';
import UserSearchBar from "./UI/SearchBar/UserSearchBar";
import PharmSearchBar from "./UI/SearchBar/PharmSearchBar";
import {useTranslation} from "react-i18next";

const AssignRole = ({userRoles}) => {
    const [roleTitle, setRoleTitle] = useState([]);
    const [selectedRole, setSelectedRole] = useState('');
    const [inputUser, setInputUser] = useState('');
    const [inputPharmacy, setInputPharmacy] = useState('');
    const [isInputDisabled, setInputDisabled] = useState(true);
    const [userNames, setUserNames] = useState([]); 
    const [fetchRolesTitle, isLoading, errorRoles] = useFetching(async () => {
        let response = await RolesService.getAllTitles();
        setRoleTitle(response);
    });
    const {t, i18n} = useTranslation();

    useEffect(() => {
        setUserNames(userRoles.map((user) => {
                return {
                    value: user.id, 
                    label: user.userName}
            }));
        fetchRolesTitle()
    }, []);
    
    const handleSelectChange = (event) =>{
        let role = event.target.value;
        setSelectedRole(role);
        
        if(role !== 'Manager') {
            setInputDisabled(true);
            setInputPharmacy("");
        }
        else{
            setInputDisabled(false);
        }
    }
    
    const handlePharmacyChange = (event) =>{
        if(isInputDisabled){
            setInputPharmacy("");
        } else {
            setInputPharmacy(event.target.value);
        }
    }
    
    function addRoleUser(event){
        event.preventDefault();
        
        if( inputUser.trim() === '' || inputPharmacy.trim() === ''){
            alert('Please, entered the data!');
        }
        return;
    }
    
    return (
        <div className="assignRoleForm">
            <form>
                <h2>{t("rolemanagerModalTitle")}</h2>
                <select value={selectedRole} onChange={handleSelectChange} name='role'>
                    <option name='default' selected hidden>-- {t("rolemanagerModalChoose")} --</option>
                    {roleTitle.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>
                <UserSearchBar/>
                
                {!isInputDisabled ?
                    <PharmSearchBar classname="activeFormInput" required={true} onChange={handlePharmacyChange}/>
                    :
                    <input
                        type='text'
                        name='pharmacy'
                        placeholder={t("rolemanagerChoosePharm")}
                        value={inputPharmacy}
                        onChange={handlePharmacyChange}
                        disabled
                        className="inActiveFormInput"
                    />

                }
                <button onClick={addRoleUser}>{t("rolemanagerAssignBtn")}</button>
            </form>
        </div>
    );
};

export default AssignRole;