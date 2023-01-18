import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {Outlet} from "react-router-dom";
import s from './layout.module.css'

const Layout = () => {

    return (
        <>
            <Header/>
            <div className={s.main}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
};

export default Layout;