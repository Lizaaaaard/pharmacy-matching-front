import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import PharmsService from "../API/PharmsService";
import PharmItem from "./PharmItem";

const PharmsList = () => {
    const [pharms, setPharms] = useState([]);
    const [fetchPharms, isLoading, errorMedc] = useFetching(async () => {
        let response = await PharmsService.getAll(limit, page);
        setPharms([...response.data]);
        // const totalCount = запрос с бэка .. кол-во медикаментов
        //setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        fetchPharms()
    }, []);
    
    return (
        <div>
            <div>
                {pharms.map(ph => <PharmItem pharms={ph} key={ph.id}/>)}
            </div>
        </div>
    );
};

export default PharmsList;