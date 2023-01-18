import React from 'react';
import styles from './relateditems.module.css'
import Slider from "../../../../UI/Slider/Slider";
import Card from "../../../../Card/Card";
import Title from "../../../../UI/Title/Title";
import MiniError from "../../../../UI/MiniError/MiniError";
import MiniLoader from "../../../../UI/MiniLoader/MiniLoader";

import {useGetRelatedItemsQuery} from "../../../../../service/swapiAPI";
import {Link} from "react-router-dom";


const RelatedItems = ({resource, itemsUrls}) => {
    const {data, isLoading, isError} = useGetRelatedItemsQuery(itemsUrls)

    if (isLoading) return <MiniLoader classes={styles.loading}/>

    return (
        <div className={styles.wrapper}>
            <Title classes={styles.title}>Related {resource}</Title>

            {isError
                ? <MiniError/>
                : <Slider largeSize={true}>

                    {data.map(item => (
                        <Link key={item.name} to={`/${resource}/${item.id}`}>
                            <Card item={item} smallSize={true}/>
                        </Link>
                    ))}

                  </Slider>
            }

        </div>
    );
};

export default RelatedItems;