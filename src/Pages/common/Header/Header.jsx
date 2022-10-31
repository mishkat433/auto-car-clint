import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/logo.svg";
import { AuthContex } from '../../../Contex/AuthProvider/AuthProvider';

const Header = () => {
    const { loginUser, logout } = useContext(AuthContex)

    const menuItems = <>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/home">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/about">About</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/">Services</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/">Blog</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-black font-bold" : undefined} to="/">Contact</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar w-11/12 mx-auto">
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
                    {
                        loginUser?.uid ? <NavLink to="/login" onClick={logout} className="mr-3 btn btn-outline btn-warning">Logout</NavLink>
                            : <NavLink to="/login" className={({ isActive }) => isActive ? "mr-3 btn font-bold btn-info" : "mr-3 btn btn-outline btn-info"}>Login</NavLink>
                    }

                    <button className="btn btn-outline btn-error">appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Header;