import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcPlus, FcBusinessman, FcAcceptDatabase, FcFilingCabinet } from "react-icons/fc";

const Sidebar = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto bg-base-100 text-base-content ">
                    <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/addProduct"><FcPlus className='text-2xl' /> Add Product</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/allProduct"><FcFilingCabinet className='text-2xl' /> All Product</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/appointment"><FcAcceptDatabase className='text-2xl' /> Manage Appointment</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/makeAdmin"><FcBusinessman className='text-2xl' /> Manage Admin</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;