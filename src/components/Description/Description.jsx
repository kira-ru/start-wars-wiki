import React, {useMemo} from 'react';
import {getDescription} from "../../helpers/getDescription";

import Title from "../UI/Title/Title";
import styles from './description.module.css'
import cn from 'classnames'

const Description = ({resource, item}) => {
    const fields = useMemo(() => getDescription(resource, item), [item, resource])

    return (
        <div className={styles.desc}>
            <Title classes={styles.title} level={3}>Description</Title>

            <ul className={cn(styles.list, 'list-reset')}>
                {fields.map(field => (
                    <li key={field.param} className={styles.item}>
                        <span className={styles.item_name}>{field.param}: </span>
                        <span className={styles.item_value}> {field.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Description;

