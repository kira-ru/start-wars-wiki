import React, {useMemo} from 'react';
import Title from "../../../../../../UI/Title/Title";
import MiniLoader from "../../../../../../UI/MiniLoader/MiniLoader";
import MiniError from "../../../../../../UI/MiniError/MiniError";
import Item from "../../../../../../Item/Item";
import {useGetRelatedItemsQuery} from "../../../../../../../service/swapiAPI";

import styles from './infocard.module.css'
import cn from 'classnames'

const InfoCard = ({itemsUrls, resource, classes}) => {
    const {data: relatedItems, isFetching, isError} = useGetRelatedItemsQuery(itemsUrls)

    if (isFetching) return <MiniLoader/>
    if (isError) return <MiniError/>

    return (
        <div className={cn(styles.info_card, classes)}>
            <Title classes={styles.title} level={3}>
                Related {resource}
            </Title>

            <ul className={cn(styles.list, 'list-reset')}>
                {
                    relatedItems.length
                    ? relatedItems.map(item => (
                        <Item
                            key={item.name}
                            item={item}
                            resource={resource}
                            classes={styles.link}
                        />))
                    : <div>There is no related {resource}</div>
                }
            </ul>
        </div>
    );
};

export default InfoCard;