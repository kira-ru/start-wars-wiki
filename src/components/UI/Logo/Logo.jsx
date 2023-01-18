import React from 'react';

import cn from 'classnames'
import styles from './logo.module.css'
import logo from './img/death-star.png'

import {Link} from "react-router-dom";


const Logo = ({classes}) => {
    return (
        <Link to='/'>
            <img className={cn(styles.logo, classes)} src={logo} alt="logo"/>
        </Link>
    );
};

export default Logo;