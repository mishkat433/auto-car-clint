import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.svg";
import { AuthContex } from '../../../Contex/AuthProvider/AuthProvider';
import notFound from "../../../assets/icons/notFoundImage.png";
import { FaAngleDown } from 'react-icons/fa';

const Header = () => {
    const { loginUser, logout } = useContext(AuthContex)
    const menuItems = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/home">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/about">About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/services">Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/">Blog</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/">Contact</NavLink></li>
    </>
    return (
        <div className='shadow-lg'>
            <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="">
                        <img className='w-24' src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/myAppointment" className="btn btn-outline btn-error mr-3">My appointment</Link>
                    {
                        loginUser?.uid ?
                            <div className='flex items-center'>

                                <div className="dropdown dropdown-bottom dropdown-end ">
                                    <label tabIndex={0} className=" flex items-center gap-3">
                                        <img className='w-10 rounded-full' src={loginUser?.photoURL ? loginUser?.photoURL : notFound} alt="User" />
                                        <FaAngleDown />
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content  p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li className='font-semibold uppercase'>{loginUser?.displayName}</li>
                                        <li>{loginUser?.email}</li>
                                        <li className=' py-2 hover:bg-gray-300 pl-2 rounded-md'><Link>Edit Profile</Link></li>
                                        <li className='py-2 hover:bg-gray-300 pl-2 rounded-md'><Link to="/admin/appointment" >Manage Appointment</Link></li>
                                        <li className=' py-2 hover:bg-gray-300 pl-2 rounded-md'><Link to="/admin">Admin Pannel</Link></li>
                                        <button onClick={logout} className="mt-3 btn btn-outline w-full text-black">Logout </button>
                                    </ul>

                                </div>
                            </div>
                            : <NavLink to="/login" className={({ isActive }) => isActive ? "btn font-bold btn-info" : " btn btn-outline btn-info"}>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;