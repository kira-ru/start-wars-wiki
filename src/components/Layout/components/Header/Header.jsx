import React, {useState} from 'react';
import cn from 'classnames'
import styles from './header.module.css'
import Logo from "../../../UI/Logo/Logo";
import Burger from "./components/Burger/Burger";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "../../../Container/Container";
import NavMenu from "./components/NavMenu/NavMenu";
import FavoriteIcon from "./components/FavoriteIcon/FavoriteIcon";

const Header = () => {
    const links = [
        {text: 'Home', href: '/'},
        {text: 'People', href: '/people?page=1'},
        {text: 'Starships', href: '/starships?page=1'},
        {text: 'Vehicles', href: '/vehicles?page=1'},
        {text: 'Planets', href: '/planets?page=1'},
        {text: 'Species', href: '/species?page=1'},
    ]

    const [active, setActive] = useState(false)

    return (
        <header className={styles.header}>
            <Container>
                <menu className={styles.header_wrapper}>
                    <ul className={cn('list-reset', styles.menu)}>

                        <div className={styles.inner}>
                            <Burger
                                active={active}
                                handler={() => setActive(!active)}
                                classes={styles.burger_btn}
                            />
                            <Dropdown active={active} setActive={setActive} links={links}/>
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

export default React.memo(Header);