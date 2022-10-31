import React from 'react';
import { FaStar } from 'react-icons/fa';

const Product = ({ product }) => {
    const { img, title, price } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl rounded-xl p-4 border-2 ">
            <figure><img className='rounded-xl h-[300px] w-full bg-gray-300 ' src={img} alt="product" /></figure>
            <div className="card-body text-center">
                <div className='flex justify-center gap-2 text-orange-600'>
                    <FaStar /> <FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h2 className="font-bold text-3xl text-center capitalize">{title}</h2>
                <p className='text-xl text-orange-600  font-bold mb-3'>Price : ${price}.00</p>
                <div className="card-actions justify-center">
                    <button className="btn bg-orange-600 border-none">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;