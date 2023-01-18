import React from 'react';

import Image from "../Image/Image";
import styles from './filmcard.module.css'
import cn from 'classnames';

const FilmCard = ({film, smallSize=false}) => {
    const classes = cn(styles.wrapper, {
        [styles.small]: smallSize
    })

    return (
        <div className={classes}>
            <Image className={styles.img} src={film.image} alt={film.title}/>
            <p className={styles.title}>
                <span>{film.title}</span>
            </p>
        </div>
    );
};

export default FilmCard;