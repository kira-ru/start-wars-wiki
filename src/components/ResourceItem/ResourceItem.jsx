import React from 'react';
import cn from 'classnames'
import Image from "../Image/Image";

import styles from './resourceitem.module.css'
import {Link} from "react-router-dom";

const ResourceItem = ({item, resource, classes}) => {

    return (
        <Link
            className={cn(styles.link, classes)}
            key={item.name}
            to={`/${resource}/${item.id}`}
        >
            <li className={styles.item} key={item.name}>
                <Image className={styles.itemImage} src={item.image} alt={item.name}/>
                <span className={styles.itemName}>{item.name}</span>
            </li>
        </Link>
    );
};

export default ResourceItem;