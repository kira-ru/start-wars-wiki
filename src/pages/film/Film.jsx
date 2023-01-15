import React from 'react';
import {useParams} from "react-router-dom";
import {useGetPersonalDataQuery, useGetRelatedItemsQuery} from "../../service/swapiAPI";
import {FILMS} from "../../constants/swapiAPI";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";
import FilmPage from "../../components/screens/FilmPage/FilmPage";

const Film = () => {
    const id = useParams().id
    const {data: film, isFetching, isError, isSuccess: isFilmSuccess} = useGetPersonalDataQuery({resource: FILMS, id})

    const {data: characters, isError: isCharactersError} = useGetRelatedItemsQuery(film?.characters, {
        skip: !isFilmSuccess
    })

    const {data: planets, isError: isPlanetsError} = useGetRelatedItemsQuery(film?.planets, {
        skip: !isFilmSuccess
    })

    const {data: species, isError: isSpeciesError} = useGetRelatedItemsQuery(film?.species, {
        skip: !isFilmSuccess
    })

    const {data: starships, isError: isStarshipsError} = useGetRelatedItemsQuery(film?.starships, {
        skip: !isFilmSuccess
    })

    const {data: vehicles, isError: isVehiclesError} = useGetRelatedItemsQuery(film?.vehicles, {
        skip: !isFilmSuccess
    })

    if (isFetching) return <Loader/>
    if (isError) return <Error/>

    return <FilmPage
        film={film}
        people={characters}
        starships={starships}
        vehicles={vehicles}
        species={species}
        planets={planets}
    />
};




export default Film;