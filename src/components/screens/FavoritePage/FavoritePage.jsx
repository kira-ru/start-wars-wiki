import React from "react";
import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";
import styles from './favoritepage.module.css'

import {useSelector} from "react-redux";

const Favorite = () => {
    const favoriteItems =  useSelector(state => state.favorite)
    const favoriteItemsEntries = Object.entries(favoriteItems)

    return (
        <section>
            <Container>
                <Title classes={styles.title}>My favorite</Title>
                {
                    favoriteItemsEntries.map(([resource, items]) =>
                        <FavoriteItems
                            key={resource}
                            items={items}
                            title={resource}
                        />)
                }
            </Container>
        </section>
    );
};

export default Favorite;