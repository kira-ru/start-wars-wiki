import React, {useState} from 'react';
import styles from './favorite.button.css';
import like from './img/like.png';
import unlike from './img/unlike.png';
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite, removeFromFavorite} from "../../../store/favorite/favorite.slice";

const FavoriteButton = ({resource, item}) => {
    const favoriteItems = useSelector(state => state.favorite[resource])
    const dispatch = useDispatch()
    const [isFavorite, setIsFavorite] = useState(!!favoriteItems[item.id])

    const toggle = () => {
        if (favoriteItems[item.id]) {
            dispatch(removeFromFavorite({id: item.id, resource}))
            setIsFavorite(!isFavorite)

            return
        }

        dispatch(addToFavorite({...item, resource}))
        setIsFavorite(!isFavorite)
    }

    return (
        <img
            className={styles.like}
            src={isFavorite ? unlike : like}
            onClick={toggle}
            alt='like'
        />
    );
};

export default FavoriteButton;