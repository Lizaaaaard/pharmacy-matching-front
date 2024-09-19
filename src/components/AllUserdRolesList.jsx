import React, {useEffect, useState} from 'react';
import $ from 'jquery';
import RolesModal from "./UI/Modal/RolesModal";
import AssignRole from "./AssignRole";
import {useFetching} from "../hooks/useFetching";
import RolesService from "../API/RolesService";
import {useTranslation} from "react-i18next";

const AllOrdersList = () => {
    const [modal, setModal] = useState(false);
    const [userRoles, setUserRoles] = useState([]);
    
    const [fetchUserRoles, isLoading, errorUserRoles] = useFetching(async () => {
        let response = await RolesService.getAllUserRoles();
        setUserRoles(response);
    });
    const {t, i18n} = useTranslation();
    
    useEffect(() => {
        fetchUserRoles()
    }, []);
      

    
    
    return (
        <div className="manageRoles">
            <div className="manageBtns">
                <button onClick={() => setModal((true))}>{t("rolemanagerAssignBtn")}</button>
                <button>{t("rolemanagerRevokeBtn")}</button>
            </div>
            <RolesModal visible={modal} setVisible={setModal}>
                <AssignRole userRoles={userRoles}></AssignRole>
            </RolesModal>
            <div className="roles-container">
                <table className="headerTable">
                    <thead>
                    <tr>
                        <th className="rolesHeader roleChkBox">
                            <input type="checkbox" id="mainInput" onChange={onClickCheckbox}></input>
                        </th>
                    <th className="rolesHeader roleUName">
                        {t("rolemanagerUserN")}
                    </th>
                    <th className="rolesHeader roleTitle">
                        {t("rolemanagerRole")}
                    </th>
                    <th className="rolesHeader roleAssignD">
                        {t("rolemanagerAssignDate")}
                    </th>
                    </tr>
                    </thead>
                </table>
                <div className="scroll-table-body">
                    <table className="bodyTable">
                        <tbody className="roleBody">
                        {userRoles.map((user) => {
                            return(
                                <tr>
                                    <td><input type="checkbox" className="tableInput"></input></td>
                                    <td hidden className="userId">{user.id}</td>
                                    <td>{user.userName}</td>
                                    <td>
                                        {user.role}
                                        {user.pharmacy === null
                                            ? ""
                                            : " (" + user.pharmacy + ")"
                                        }
                                    </td>
                                    <td>{user.assignDate}</td>
                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    
    
};

function onClickCheckbox() {
    let headerCheckbox = $('.rolesHeader.roleChkBox input[type="checkbox"]');
    let rowCheckboxes = $('.roleBody input[type="checkbox"]');
    console.log(rowCheckboxes);
    const isChecked = headerCheckbox.is(':checked');

    rowCheckboxes.each(function() {
        this.checked = isChecked;
    })
}


export default AllOrdersList;