import React from 'react';
import styles from './relateditems.module.css'
import Slider from "../../../../UI/Slider/Slider";
import Card from "../../../../Card/Card";
import Title from "../../../../UI/Title/Title";
import {Link} from "react-router-dom";
import {useGetRelatedItemsQuery} from "../../../../../service/swapiAPI";
import MiniError from "../../../../UI/MiniError/MiniError";
import MiniLoader from "../../../../UI/MiniLoader/MiniLoader";


const RelatedItems = ({resource, itemsUrls}) => {
    const {data,isLoading, isError} = useGetRelatedItemsQuery(itemsUrls)

    if (isLoading) return <MiniLoader/>
    if (isError) return <MiniError/>

    return (
        <div className={styles.wrapper}>
            <Title classes={styles.title}>{resource}</Title>
            <Slider largeSize={true}>
                {data && data.map(item => (
                    <Link key={item.name} to={`/${resource}/${item.id}`}>
                        <Card item={item} smallSize={true}/>
                    </Link>
                ))}
            </Slider>

        </div>
    );
};

export default RelatedItems;