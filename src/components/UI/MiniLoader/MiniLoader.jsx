import React from 'react';
import styles from './miniloader.module.css'
import cn from "classnames";

const MiniLoader = ({classes}) => {

    return (
        <div className={cn(styles.loader, classes)}>
            <span></span>
        </div>
    );
};

export default MiniLoader;