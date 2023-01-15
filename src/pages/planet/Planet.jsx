import React from 'react';
import Loader from "../../components/UI/Loader/Loader";
import PersonalPage from "../../components/screens/PersonalPage/PersonalPage";
import Error from "../../components/UI/Error/Error";

import {useGetPersonalDataQuery} from "../../service/swapiAPI";
import {PLANETS, PEOPLE} from "../../constants/swapiAPI";
import {useParams} from "react-router-dom";

const Planet = () => {
    const id = useParams().id
    const {data: planet, isFetching, isError} = useGetPersonalDataQuery({resource: PLANETS, id})

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return (
        <PersonalPage
            item={planet}
            relatedItemsUrls={{[PEOPLE]: planet.residents}}
            relatedFilmsUrls={planet.films}
            resource={PLANETS}
        />
    );
};

export default Planet;