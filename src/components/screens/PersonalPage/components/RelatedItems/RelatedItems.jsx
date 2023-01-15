import React from 'react';
import styles from './relateditems.module.css'
import InfoCard from "./components/InfoCard/InfoCard";


const RelatedItems = ({relatedItemsUrls}) => {
    const related = Object.entries(relatedItemsUrls)
    console.log(relatedItemsUrls)
    return (
        <div className={styles.related}>
            {related.map(([resource, urls]) =>
                <InfoCard key={resource} itemsUrls={urls} resource={resource}/>
            )}
        </div>
    );
};

export default RelatedItems;

/// order of related items:
//         starship,
//         vehicle,
//         pilots,
//         species,
//         people,
//         planets,
//         residents,
