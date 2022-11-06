import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcPlus, FcBusinessman, FcFilingCabinet, FcServices, FcTodoList } from "react-icons/fc";
import { AuthContex } from '../../../Contex/AuthProvider/AuthProvider';
import { FaAngleRight } from 'react-icons/fa';

const Sidebar = () => {
    const { loginUser } = useContext(AuthContex)
    const [findAdmin, setFindAdmin] = useState("")

    useEffect(() => {
        fetch(`https://auto-car-server.vercel.app/admin?email=${loginUser?.email}`)
            .then(res => res.json())
            .then(data => setFindAdmin(data[0].email))
    }, [loginUser?.email])

    return (
        <div className="drawer drawer-mobile mt-10">
            {!findAdmin && <div className='flex justify-center mt-32'><button className="btn loading">loading...</button></div>}
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><FaAngleRight /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                {
                    findAdmin ? <ul className="menu p-4  bg-base-100 text-base-content ">
                        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/addProduct"><FcPlus className='text-2xl' />  Add Product</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/allProduct"><FcFilingCabinet className='text-2xl' />  All Product</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/addService"><FcServices className='text-2xl' />  Add Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/allService"><FcTodoList className='text-2xl' />  All Services</NavLink></li>
                        {/* <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/appointment"><FcAcceptDatabase className='text-2xl' />  Manage Appointment</NavLink></li> */}
                        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold bg-gray-200 mb-2" : "mb-2"} to="/admin/makeAdmin"><FcBusinessman className='text-2xl' />  Manage Admin</NavLink></li>
                    </ul> :
                        <div>
                            <p className='text-red-500 mt-10 text-center'>Not Found</p>
                        </div>
                }

            </div>
        </div>
    );
};

export default Sidebar;