import {useSelector} from "react-redux";
import Container from "../../Container/Container";
import Title from "../../UI/Title/Title";
import React from "react";
import FavoriteItems from "./components/FavoriteItems/FavoriteItems";

const Favorite = () => {
    const favoriteItems =  useSelector(state => state.favorite)

    return (
        <section>
            <Container>
                <Title>Favorite</Title>

                {
                    Object.entries(favoriteItems).map((favoriteEntities, index) =>
                        <FavoriteItems
                            key={index}
                            items={favoriteEntities[1]}
                            title={favoriteEntities[0]}
                        />)
                }
            </Container>
        </section>
    );
};

export default Favorite;