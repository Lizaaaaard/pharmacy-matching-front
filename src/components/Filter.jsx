import React from 'react';
import $ from 'jquery';

const Filter = ({filterMedc}) => {
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
                    <input type="checkbox" name="dos" onClick={selectAllBlock}/>Dosed form:
                    <div>
                        <input type="checkbox" name="capsules"/>capsules
                    </div>
                    <div>
                        <input type="checkbox" name="tablets"/>tablets
                    </div>
                    <div>
                        <input type="checkbox" name="suppositories"/>suppositories
                    </div>
                </div>
                <div className="nonDosed filterBlock">
                    <input type="checkbox" name="nonDos" onClick={selectAllBlock}/>Non-dosed form:
                    <div>
                        <input type="checkbox" name="ointment"/>ointment
                    </div>
                    <div>
                        <input type="checkbox" name="syrup"/>syrup
                    </div>
                    <div>
                        <input type="checkbox" name="drops"/>potion
                    </div>
                    <div>
                        <input type="checkbox" name="gel"/>gel
                    </div>
                </div>
                <div className="mixedType filterBlock">
                    <input type="checkbox" name="mix" onClick={selectAllBlock}/>Mixed type form:
                    <div>
                        <input type="checkbox" name="patch"/>patch
                    </div>
                </div>
            </div>
            <div className="producer filterDiv">
                <div className="filterBlock">
                    <input type="checkbox" name="prod" onClick={selectAllBlock}/>Producer:
                    <div>
                        <input type="checkbox" name="belarus"/>Belarus
                    </div>
                    <div>
                        <input type="checkbox" name="russia"/>Russia
                    </div>
                    <div>
                        <input type="checkbox" name="usa"/>USA
                    </div>
                    <div>
                        <input type="checkbox" name="china"/>China
                    </div>
                    <div>
                        <input type="checkbox" name="poland"/>Poland
                    </div>
                    <div>
                        <input type="checkbox" name="india"/>India
                    </div>
                    <div>
                        <input type="checkbox" name="germany"/>Germany
                    </div>
                </div>
            </div>
            <div className="filterDiv">
                <label className="checkbox-ios">
                    <input type="checkbox" name="inStock"/>
                    <span className="checkbox-ios-switch"></span>Is in stock
                </label>
                <label className="checkbox-ios">
                    <input type="checkbox" name="need"/>
                    <span className="checkbox-ios-switch"></span>Need prescription
                </label>
            </div>
            <div className="filterButton">
                <button onClick={filterMedc}>Apply filter</button>
            </div>
        </div>
    );
};

export default Filter;