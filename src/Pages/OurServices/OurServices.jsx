import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../Home/Services/ServicesCard';
import heaerBg from "../../assets/images/banner/5.jpg";

const OurServices = () => {
    const services = useLoaderData()
    return (
        <div className='w-11/12 mx-auto pb-10'>
            <div className=' bg-no-repeat h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${heaerBg})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-5xl font-bold ml-24'> Our Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {services.length === 0 && <button className="btn loading w-32">loading...</button>}
                {
                    services.map(service => <ServicesCard service={service} key={service._id} />)
                }
            </div>
        </div>
    );
};

export default OurServices;