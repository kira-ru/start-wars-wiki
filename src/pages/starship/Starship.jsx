import React from 'react';
import PersonalPage from "../../components/screens/PersonalPage/PersonalPage";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";

import {useParams} from "react-router-dom";
import {useGetPersonalDataQuery} from "../../service/swapiAPI";
import {PEOPLE, STARSHIPS} from "../../constants/swapiAPI";

const Starship = () => {
    const id = useParams().id
    const {data: starship, isFetching, isError} = useGetPersonalDataQuery({resource: STARSHIPS, id})

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return (
        <PersonalPage
            item={starship}
            relatedItemsUrls={{[PEOPLE]: starship.pilots}}
            relatedFilmsUrls={starship.films}
            resource={STARSHIPS}
        />
    );
};

export default Starship;