import React from 'react';
import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import Grid from "../../Grid/Grid";
import FilmCard from "../../FilmCard/FilmCard";
import styles from "./filmspage.module.css";

import {Link} from "react-router-dom";

const FilmsPage = ({films}) => {

    return (
        <section>
            <Container>
                <Title classes={styles.title}>Star Wars films</Title>
                <Grid classes={styles.grid}>
                    {
                        films.map(film => (
                            <Link key={film.title} to={`films/${film.id}`}>
                                <FilmCard film={film} largeSize={true}/>
                            </Link>
                        ))
                    }
                </Grid>
            </Container>
        </section>
    );
};

export default FilmsPage;