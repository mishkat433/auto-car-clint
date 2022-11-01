import React from 'react';
import adminPannel from "../../../assets/amination/adminPage.gif"

const AdminPannel = () => {
    return (
        <div className='h-[85vh]'>
            <h1 className='text-4xl font-semibold text-center my-3'>Welcome to Admin Pnnel</h1>
            <img className='w-full h-full' src={adminPannel} alt="" />
        </div>
    );
};

export default AdminPannel;