import React from 'react';
import cn from 'classnames';
import styles from './filmcard.module.css'
import Image from "../Image/Image";

const FilmCard = ({film, smallSize=false}) => {
    const classes = cn(styles.wrapper, {
        [styles.small]: smallSize
    })

    return (
        <div className={classes}>
            <Image className={styles.img} src={film.image} alt={film.title}/>
            <p className={styles.title}>
                {film.title}
            </p>
        </div>
    );
};

export default FilmCard;