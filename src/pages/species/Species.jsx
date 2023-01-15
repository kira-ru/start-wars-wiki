import React from 'react';
import {useParams} from "react-router-dom";
import {useGetPersonalDataQuery, useGetRelatedItemsQuery} from "../../service/swapiAPI";
import {PEOPLE, SPECIES} from "../../constants/swapiAPI";
import Loader from "../../components/UI/Loader/Loader";
import PersonalPage from "../../components/screens/PersonalPage/PersonalPage";
import Error from "../../components/UI/Error/Error";

const Species = () => {
    const id = useParams().id
    const {data: species, isFetching, isError} = useGetPersonalDataQuery({resource: SPECIES, id})

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return (
        <PersonalPage
            item={species}
            relatedItemsUrls={{[PEOPLE]: species.people}}
            relatedFilmsUrls={species.films}
            resource={SPECIES}
        />
    );
};

export default Species;