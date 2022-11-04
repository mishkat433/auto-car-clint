import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import heaerBg from "../../assets/images/banner/4.jpg";

const SerVicesDetails = () => {
    const selectService = useLoaderData()
    const details = selectService[0]
    return (
        <div className='w-11/12 mx-auto'>
            <div className=' bg-no-repeat h-64 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${heaerBg})`, backgroundPosition: "center" }}>
                <h1 className='text-white text-5xl font-bold ml-24'>Services Details</h1>
            </div>
            <div>
                <img src={details?.img} alt="" />
                <h1 className='text-5xl'>{details?.title}</h1>
                <Link to={`/checkout/${details?._id}`} className='btn btn-success'>checkOut</Link>
            </div>
        </div>
    );
};

export default SerVicesDetails;