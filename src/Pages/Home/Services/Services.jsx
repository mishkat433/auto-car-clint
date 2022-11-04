import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://auto-car-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='py-10'>
            <div className='text-center w-full md:w-1/2 mx-auto'>
                <h2 className='text-orange-600 font-bold text-xl mb-3' >Services</h2>
                <h1 className='text-3xl md:text-5xl font-bold mb-3'>Our Service Area</h1>
                <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {services.length === 0 && <button className="btn loading w-32">loading...</button>}
                {
                    services.map(service => <ServicesCard service={service} key={service._id} />)
                }
            </div>
            <div className='flex justify-center mt-14'>
                <button className='btn bg-orange-600 border-none '>Show more</button>
            </div>
        </div>
    );
};

export default Services;