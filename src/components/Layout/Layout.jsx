import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <>
            <Header/>

            <div className='main'>
                <Outlet/>
            </div>

            <Footer/>
        </>
    );
};

export default Layout;