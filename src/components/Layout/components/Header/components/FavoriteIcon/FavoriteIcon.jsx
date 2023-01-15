import React from 'react';
import emblem from './img/emblem.png'
import styles from './favoriteicon.module.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {getFavoriteItemsNumber} from "../../../../../../helpers";

const FavoriteIcon = () => {
    const favoriteItems = useSelector(state => state.favorite)
    const favoriteNumber = getFavoriteItemsNumber(Object.values(favoriteItems))

    return (
        <Link className={styles.emblem} to='/favorite'>
            <img src={emblem} alt="favorite"/>
            <span className={styles.number}>{favoriteNumber}</span>
        </Link>
    );
};

export default FavoriteIcon;