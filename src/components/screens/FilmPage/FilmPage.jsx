import React from 'react';
import Container from "../../Container/Container";
import FilmCard from "../../FilmCard/FilmCard";
import Description from "../../Description/Description";
import {FILMS} from "../../../constants/swapiAPI";
import styles from './filmpage.module.css'
import RelatedItems from "./components/RelatedItems/RelatedItems";

const FilmPage = ({film, ...relatedItems}) => {

    return (
        <section className={styles.wrapper}>
            <Container>
                <div className={styles.row}>
                    <FilmCard film={film}/>
                    <Description item={film} resource={FILMS}/>
                </div>

                {
                    Object.entries(relatedItems).map(([title, item]) =>
                    <RelatedItems key={title} title={title} items={item}/>
                )}

            </Container>
        </section>
    );
};

export default FilmPage;