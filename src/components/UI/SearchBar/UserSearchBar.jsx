import React, {useEffect, useState} from 'react';
import {useFetching} from "../../../hooks/useFetching";
import UserService from "../../../API/UserService";
import {useTranslation} from "react-i18next";

const UserSearchBar = () => {
    const [user, setUser] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [fetchUsers, isLoading, errorUsers] = useFetching(async () => {
        let response = await UserService.getAllUsers();
        setUser(response);
    });
    const {t, i18n} = useTranslation();
    
    useEffect(()=>{
        fetchUsers()
    }, [])
    
    const handleFilter = (event) => {
        const searchWord = event.target.value
        const newFilter = user.filter((value) =>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
        if(searchWord === ""){
            setFilteredData([]);
        }
        else{
            setFilteredData(newFilter);
        }        
    }
    const inputWithUsers = (event) =>{
        setFilteredData([]);
    }
    
    return (
        <div className="searchUser" onMouseLeave={inputWithUsers}>
            <div className="searchInputs">
                <input type="text" placeholder={t("rolemanagerChooseUser")} onChange={handleFilter}/>
            </div>
            {filteredData.length != 0 && (
                <div className="dataResults">
                    {filteredData.slice(0,10).map((u) => (
                        <a href="#" className="dataItem">
                            <p>{u}</p>
                        </a>
                    ))} 
                </div> )
            }
            
        </div>
    );
};

export default UserSearchBar;