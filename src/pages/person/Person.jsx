import React from 'react';
import Loader from "../../components/UI/Loader/Loader";
import PersonalPage from "../../components/screens/PersonalPage/PersonalPage";
import Error from "../../components/UI/Error/Error";

import {useParams} from "react-router-dom";
import { useGetPersonalDataQuery} from "../../service/swapiAPI";
import {PEOPLE, VEHICLES, STARSHIPS} from "../../constants/swapiAPI";


const Person = () => {
    const id = useParams().id
    const {data: person, isFetching, isError} = useGetPersonalDataQuery({resource: PEOPLE, id})

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return (
        <PersonalPage
            item={person}
            relatedItemsUrls={{
                [VEHICLES]: person.vehicles,
                [STARSHIPS]: person.starships
        }}
            relatedFilmsUrls={person.films}
            resource={PEOPLE}
        />
    );
};

export default Person;