import React from 'react';
import {useParams} from "react-router-dom";
import {useGetPersonalDataQuery, useGetRelatedItemsQuery} from "../../service/swapiAPI";
import {FILMS, PEOPLE, PLANETS, SPECIES, STARSHIPS, VEHICLES} from "../../constants/swapiAPI";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";
import FilmPage from "../../components/screens/FilmPage/FilmPage";

const Film = () => {
    const id = useParams().id
    const {data: film, isFetching, isError, isSuccess: isFilmSuccess} = useGetPersonalDataQuery({resource: FILMS, id})

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return <FilmPage
        film={film}
        relatedItemsUrls={{
            [PEOPLE]: film.characters,
            [SPECIES]: film.species,
            [STARSHIPS]: film.starships,
            [VEHICLES]: film.vehicles,
            [PLANETS]: film.planets,
        }}
    />
};


export default Film;