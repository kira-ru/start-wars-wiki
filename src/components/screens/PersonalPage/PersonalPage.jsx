import React from 'react';
import Container from "../../Container/Container";
import Card from "../../Card/Card";
import Title from "../../UI/Title/Title";
import Description from "../../Description/Description";
import RelatedItems from "./components/RelatedItems/RelatedItems";
import RelatedFilms from "./components/RelatedFilms/RelatedFilms";
import FavoriteButton from "../../UI/FavoriteButton/FavoriteButton";
import styles from './personalPage.module.css'

const PersonalPage = ({resource, item, relatedItemsUrls, relatedFilmsUrls}) => {

    return (
        <section className='personal'>
            <Container>
                <Title classes={styles.title}>{item.name}</Title>
                <FavoriteButton resource={resource} item={item}/>

                <div className={styles.box}>
                    <Card item={item} isPersonalPage={true}/>
                    <Description resource={resource} item={item}/>
                    <RelatedItems relatedItemsUrls={relatedItemsUrls} resource={resource}/>
                </div>

                <RelatedFilms filmsUrls={relatedFilmsUrls}/>
            </Container>
        </section>
    );
};

export default PersonalPage;