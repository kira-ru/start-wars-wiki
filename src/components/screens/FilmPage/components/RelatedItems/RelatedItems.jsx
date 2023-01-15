import React from 'react';
import styles from './relateditems.module.css'
import Slider from "../../../../UI/Slider/Slider";
import Card from "../../../../Card/Card";
import Title from "../../../../UI/Title/Title";
import {Link} from "react-router-dom";


const RelatedItems = ({title, items}) => {
    const resource = title

    return (
        <div className={styles.wrapper}>
            <Title classes={styles.title}>{title}</Title>
            <Slider largeSize={true}>
                {items && items.map(item => (
                    <Link key={item.name} to={`/${resource}/${item.id}`}>
                        <Card item={item} smallSize={true}/>
                    </Link>
                ))}
            </Slider>

        </div>
    );
};

export default RelatedItems;