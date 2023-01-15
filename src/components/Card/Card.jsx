import React from 'react';
import styles from './card.module.css'
import {Link} from "react-router-dom";
import Image from "../Image/Image";
import cn from "classnames";


const Card = ({item, resource, smallSize=false}) => {
    const classes = cn(styles.card, {
        [styles.small]: smallSize,
        [styles.starship]: resource === 'starships',
    })

    return (
        <div className={classes}>
            <Image className={styles.photo} src={item.image} alt={item.name}/>

            <div className={styles.name}>
                <p>{item.name}</p>
            </div>
        </div>
    );
};

export default Card;