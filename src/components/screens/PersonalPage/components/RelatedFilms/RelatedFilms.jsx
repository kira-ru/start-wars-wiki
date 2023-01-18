import React from 'react';
import styles from './films.module.css'

import FilmCard from "../../../../FilmCard/FilmCard";
import Slider from "../../../../UI/Slider/Slider";
import Title from "../../../../UI/Title/Title";
import MiniLoader from "../../../../UI/MiniLoader/MiniLoader";
import MiniError from "../../../../UI/MiniError/MiniError";

import {Link} from "react-router-dom";
import {useGetRelatedItemsQuery} from "../../../../../service/swapiAPI";


const RelatedFilms = ({filmsUrls}) => {
    const {data: films, isFetching, isError} = useGetRelatedItemsQuery(filmsUrls)

    if (isFetching) return <MiniLoader/>

    return (
        <div className={styles.wrapper}>
            <Title classes={styles.title}>Related Films</Title>

            {isError
                ? <MiniError/>
                : <Slider>
                    {films.map(film => (
                        <Link to={`/films/${film.id}`} key={film.title}>
                            <FilmCard film={film} smallSize={true}/>
                        </Link>
                    ))}
                </Slider>
            }

        </div>
    );
};

export default RelatedFilms;