import React from 'react';
import $ from 'jquery';
import {useTranslation} from "react-i18next";

const Filter = ({filterMedc}) => {
    const{t, i18n} = useTranslation();
    $(window).keyup(function(e){
        var target = $('.checkbox-ios input:focus');
        if (e.keyCode == 9 && $(target).length){
            $(target).parent().addClass('focused');
        }
    });
    
    function selectAllBlock(element) {
        let checkedParentValue = $(element.target)[0].checked;
        $(element.target).siblings().each(function() {
            $(this).children()[0].checked = checkedParentValue;
        });
    }

    $('.checkbox-ios input').focusout(function(){
        $(this).parent().removeClass('focused');
    });
    
    return (
        <div className="filter">
            <div className="releaseForm filterDiv">
                <div className="dosed filterBlock">
                    <input type="checkbox" name="dos" onClick={selectAllBlock}/>{t("dosedType")}
                    <div>
                        <input type="checkbox" name="capsules"/>{t("capsules")}
                    </div>
                    <div>
                        <input type="checkbox" name="tablets"/>{t("tablets")}
                    </div>
                    <div>
                        <input type="checkbox" name="suppositories"/>{t("suppositories")}
                    </div>
                </div>
                <div className="nonDosed filterBlock">
                    <input type="checkbox" name="nonDos" onClick={selectAllBlock}/>{t("nonDosed")}
                    <div>
                        <input type="checkbox" name="ointment"/>{t("ointment")}
                    </div>
                    <div>
                        <input type="checkbox" name="syrup"/>{t("syrup")}
                    </div>
                    <div>
                        <input type="checkbox" name="drops"/>{t("potion")}
                    </div>
                    <div>
                        <input type="checkbox" name="gel"/>{t("gel")}
                    </div>
                </div>
                <div className="mixedType filterBlock">
                    <input type="checkbox" name="mix" onClick={selectAllBlock}/>{t("mixedTypes")}
                    <div>
                        <input type="checkbox" name="patch"/>{t("patch")}
                    </div>
                </div>
            </div>
            <div className="producer filterDiv">
                <div className="filterBlock">
                    <input type="checkbox" name="prod" onClick={selectAllBlock}/>{t("prodFilter")}
                    <div>
                        <input type="checkbox" name="belarus"/>{t("Belarus")}
                    </div>
                    <div>
                        <input type="checkbox" name="russia"/>{t("Russia")}
                    </div>
                    <div>
                        <input type="checkbox" name="usa"/>{t("USA")}
                    </div>
                    <div>
                        <input type="checkbox" name="china"/>{t("China")}
                    </div>
                    <div>
                        <input type="checkbox" name="poland"/>{t("Poland")}
                    </div>
                    <div>
                        <input type="checkbox" name="india"/>{t("India")}
                    </div>
                    <div>
                        <input type="checkbox" name="germany"/>{t("Germany")}
                    </div>
                </div>
            </div>
            <div className="filterDiv">
                <label className="checkbox-ios">
                    <input type="checkbox" name="inStock"/>
                    <span className="checkbox-ios-switch"></span>{t("inStock")}
                </label>
                <label className="checkbox-ios">
                    <input type="checkbox" name="need"/>
                    <span className="checkbox-ios-switch"></span>{t("needPrescr")}
                </label>
            </div>
            <div className="filterButton">
                <button onClick={filterMedc}>{t("applyFilter")}</button>
            </div>
        </div>
    );
};

export default Filter;