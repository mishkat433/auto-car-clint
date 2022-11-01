import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/common/Footer/Footer';
import Header from '../Pages/common/Header/Header';
import Sidebar from '../Pages/common/Sidebar/Sidebar';

const AdminLayout = () => {
    return (
        <div >
            <Header />
            <div className='flex flex-col md:flex-row  w-11/12 mx-auto '>
                <div className='w-1/5 '>
                    <Sidebar />
                </div>
                <div className='w-4/5 bg-gray-200 rounded-lg'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminLayout;