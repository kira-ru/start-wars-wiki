import React from 'react';
import PersonalPage from "../../components/screens/PersonalPage/PersonalPage";
import Loader from "../../components/UI/Loader/Loader";

import {useParams} from "react-router-dom";
import {PEOPLE, VEHICLES} from "../../constants/swapiAPI";
import {useGetPersonalDataQuery} from "../../service/swapiAPI";
import Error from "../../components/UI/Error/Error";

const Vehicles = () => {
    const id = useParams().id
    const {data: vehicles, isFetching, isError} = useGetPersonalDataQuery({resource: VEHICLES, id})

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return (
        <PersonalPage
            item={vehicles}
            relatedItemsUrls={{[PEOPLE]: vehicles.pilots}}
            relatedFilms={vehicles.films}
            resource={VEHICLES}
        />
    );
};

export default Vehicles;