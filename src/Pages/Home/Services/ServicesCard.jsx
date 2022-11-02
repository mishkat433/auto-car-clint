import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const { img, title, price, description } = service
    return (
        <div className="card w-full bg-base-100 shadow-xl rounded-xl p-4 border-2" data-aos="zoom-in">
            <figure><img className='rounded-xl h-[300px] w-full bg-gray-300 ' src={img} alt="product" /></figure>
            <div className="card-body text-center">

                <h2 className="font-bold text-3xl text-center capitalize">{title}</h2>
                <p className='text-justify'>{description.slice(0, 110)}</p>
                <p className='text-xl text-orange-600  font-bold mb-3'>Price : ${price}.00</p>
                <div className="card-actions justify-center">
                    <Link to="/" className="btn bg-orange-600 border-none">Get Our Services</Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;