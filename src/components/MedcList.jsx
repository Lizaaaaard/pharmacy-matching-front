import React, {useEffect, useState} from 'react';
import MedcItem from "./MedcItem";
import MedcService from "../API/MedcService";
import {useFetching} from "../hooks/useFetching";

const MedcList = ({search}) => {
    const [medc, setMedc] = useState([]);
    const [page, setPage] = useState(1);
    const [fetchMedc, isLoading, errorMedc] = useFetching(async () => {
        let response = await MedcService.getAll();
        setMedc([...response.data]);
    });
    
    useEffect(() => {
        fetchMedc();
    }, []);
    
    return (
        <div>
            {medc.filter(med => med.title.toLowerCase().includes(search.toLowerCase()))
                .map(med => <MedcItem medc={med} key={med.id}/>
            )}
        </div>
    );
};

export default MedcList;