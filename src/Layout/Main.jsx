import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/common/Footer/Footer';
import Header from '../Pages/common/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;