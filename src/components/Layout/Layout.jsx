import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from './layout.module.css'

import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Header/>

            <div className={styles.main}>
                <Outlet/>
            </div>

            <Footer/>
        </>
    );
};

export default Layout;