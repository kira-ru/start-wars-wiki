import React from 'react';
import Title from "../../../../UI/Title/Title";
import styles from "./favoriteitems.module.css"
import ResourceItem from "../../../../ResourceItem/ResourceItem";

const FavoriteItems = ({title, items}) => {
    const itemsArray = Object.values(items)

    if (!itemsArray.length) return

    return (
        <div className={styles.wrapper}>
            <Title classes={styles.title}>{title}:</Title>
            <div className={styles.inner}>

                {itemsArray.map(item =>
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