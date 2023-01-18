import React from 'react';
import styles from './menulink.module.css';
import cn from 'classnames'

import {NavLink} from "react-router-dom";

const MenuLink = ({href, classes, children}) => {
    const linkClass = ({isActive}) => isActive
        ? cn(styles.link, styles.active, classes)
        : cn(styles.link, classes)

return (
    <NavLink className={linkClass} to={href}>
            <span>
                <span>
                  <span>{children}</span>
                </span>
            </span>
    </NavLink>
);
}
;

export default MenuLink;