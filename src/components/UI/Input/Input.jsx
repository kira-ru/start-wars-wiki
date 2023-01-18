import React from 'react';
import cn from "classnames";
import styles from './input.module.css'

const Input = ({classes, ...props}) => {return (
        <input
            type="search"
            className={cn(styles.input, classes)}
            {...props}
        />
    );
};

export default Input;