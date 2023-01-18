import {useSelector} from "react-redux";
import styles from "../../../pages/favorite/favorite.module.css";
import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import React from "react";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";

const Favorite = () => {
    const favoriteItems =  useSelector(state => state.favorite)
    const favoriteItemsEntries = Object.entries(favoriteItems)

    return (
        <section className={styles.wrapper}>
            <Container>
                <Title>Favorite</Title>

                {
                    favoriteItemsEntries.map(([resource, items]) =>
                        <FavoriteItems
                            key={resource}
                            items={resource}
                            title={items}
                        />)
                }
            </Container>
        </section>
    );
};

export default Favorite;