import React from 'react';
import Container from "../../Container/Container";
import FilmCard from "../../FilmCard/FilmCard";
import Description from "../../Description/Description";
import {FILMS} from "../../../constants/swapiAPI";
import styles from './filmpage.module.css'
import RelatedItems from "./components/RelatedItems/RelatedItems";

const FilmPage = ({film, relatedItemsUrls}) => {
    console.log(relatedItemsUrls)
    return (
        <section className={styles.wrapper}>
            <Container>
                <div className={styles.row}>
                    <FilmCard film={film}/>
                    <Description item={film} resource={FILMS}/>
                </div>

                {
                    Object.entries(relatedItemsUrls).map(([resource, urls]) =>
                    <RelatedItems key={resource} resource={resource} itemsUrls={urls}/>
                )}

            </Container>
        </section>
    );
};

export default FilmPage;