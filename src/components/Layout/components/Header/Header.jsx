import React, {useState} from 'react';
import Logo from "../../../UI/Logo/Logo";
import Burger from "./components/Burger/Burger";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "../../../Container/Container";
import NavMenu from "./components/NavMenu/NavMenu";
import FavoriteIcon from "./components/FavoriteIcon/FavoriteIcon";

import styles from './header.module.css'
import cn from 'classnames'

const Header = () => {
    const links = [
        {text: 'Home', href: '/'},
        {text: 'People', href: '/people?page=1'},
        {text: 'Starships', href: '/starships?page=1'},
        {text: 'Vehicles', href: '/vehicles?page=1'},
        {text: 'Planets', href: '/planets?page=1'},
        {text: 'Species', href: '/species?page=1'},
    ]

    const [dropDownActive, setDropDownActive] = useState(false)

    return (
        <header className={styles.wrapper}>
            <Container>
                <menu className={styles.inner}>
                    <ul className={cn('list-reset', styles.menu)}>
                        <div className={styles.row}>
                            <Burger
                                active={dropDownActive}
                                handler={() => setDropDownActive(!dropDownActive)}
                                classes={styles.burger_btn}
                            />
                            <Dropdown active={dropDownActive} setActive={setDropDownActive} links={links}/>
                            <Logo classes={styles.logo}/>
                        </div>

                        <NavMenu links={links}/>

                        <FavoriteIcon/>
                    </ul>
                </menu>
            </Container>
        </header>
    );
};

export default Header;