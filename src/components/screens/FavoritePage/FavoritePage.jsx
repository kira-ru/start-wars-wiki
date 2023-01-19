import React from "react";
import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";
import styles from './favoritepage.module.css'

import {useSelector} from "react-redux";
import {getFavoriteItemsAmount} from "../../../helpers";

const Favorite = () => {
    const favoriteItems = useSelector(state => state.favorite)
    const favoriteItemsEntries = Object.entries(favoriteItems)
    const favoriteItemsAmount = getFavoriteItemsAmount(Object.values(favoriteItems))

    return (
        <section>
            <Container>
                <Title classes={styles.title}>My favorite</Title>
                {favoriteItemsAmount

                    ? favoriteItemsEntries.map(([resource, items]) =>
                        <FavoriteItems
                            key={resource}
                            items={items}
                            title={resource}
                        />)

                    : <p>Unfortunately, there's nothing here yet. To add to favorites, use the likes on the item's
                        page</p>
                }
            </Container>
        </section>
    );
};

export default Favorite;