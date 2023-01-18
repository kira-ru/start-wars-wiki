import React from 'react';

import Title from "../../../../UI/Title/Title";
import ResourceItem from "../../../../ResourceItem/ResourceItem";
import styles from "./favoriteitems.module.css"

const FavoriteItems = ({title, items}) => {
    const arrayOfItems = Object.values(items)

    if (!arrayOfItems.length) return

    return (
        <div className={styles.wrapper}>
            <Title classes={styles.title}>{title}:</Title>
            <div className={styles.inner}>
                {arrayOfItems.map(item =>
                    <ResourceItem
                        classes={styles.item}
                        key={item.name}
                        item={item}
                        resource={item.resource}
                    />
                )}
            </div>
        </div>
    );
};

export default FavoriteItems;