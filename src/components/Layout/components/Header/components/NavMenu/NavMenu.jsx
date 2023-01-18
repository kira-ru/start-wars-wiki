import React from 'react';

import MenuLink from "../../../../../UI/MenuLink/MenuLink";
import styles from './navmenu.module.css';
import cn from "classnames";


const NavMenu = ({links}) => {
    return (
        <nav className={cn('list-reset', styles.wrapper)}>
            {links.map((item, index) => (
                <MenuLink
                    key={index}
                    classes={styles.item}
                    href={item.href}
                >
                    {item.text}
                </MenuLink>
            ))}

        </nav>
    );
};

export default NavMenu;