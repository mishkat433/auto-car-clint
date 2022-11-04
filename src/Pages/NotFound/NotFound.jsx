import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../common/Header/Header';
import notFoundImg from "../../assets/amination/error.gif";

const NotFound = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <Header />
            <div className='flex flex-col items-center'>
                <h1 className='text-red-500 text-2xl'>{error.statusText}</h1>
                <h1 className='text-red-500 text-2xl'>{error.status}</h1>
                <img className='w-72 mt-20' src={notFoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;