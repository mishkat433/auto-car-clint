import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.svg";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-black mt-10'>
            <div className="footer p-10 w-11/12 mx-auto text-white ">
                <div>
                    <img src={logo} alt="logo" />
                    <div className="grid grid-flow-col gap-5 text-2xl">
                        <Link to="/" className='hover:text-white text-gray-400 duration-300'><FaFacebookSquare /></Link>
                        <Link to="/" className='hover:text-white text-gray-400 duration-300'><FaLinkedin /></Link>
                        <Link to="/" className='hover:text-white text-gray-400 duration-300'><FaGithubSquare /></Link>
                    </div>

                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;