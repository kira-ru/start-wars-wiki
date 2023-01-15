import React from 'react';
import styles from "./homepage.module.css";
import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import Grid from "../../Grid/Grid";
import {Link} from "react-router-dom";
import FilmCard from "../../FilmCard/FilmCard";

const HomePage = ({films}) => {

    return (
        <section className={styles.wrapper}>
            <Container>
                <Title>Star Wars</Title>
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

export default HomePage;