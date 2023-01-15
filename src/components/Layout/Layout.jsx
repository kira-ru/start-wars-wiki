import React from 'react';
import Header from "./components/Header/Header";
import {Outlet, useParams} from "react-router-dom";
import Footer from "./components/Footer/Footer";

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