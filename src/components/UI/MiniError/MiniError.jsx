import React from 'react';
import cn from "classnames";
import styles from './minierror.module.css'

const MiniError = ({classes}) => {
    return (
        <p className={cn(styles.error, classes)}>There seems to be an error, come back later</p>
    );
};

export default MiniError;