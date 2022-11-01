import React from 'react';

const Feature = ({ feature }) => {
    const { image, title } = feature;
    return (
        <div className='border-2 p-4 rounded-xl lg:w-56 hover:bg-orange-400 hover:text-white duration-300 cursor-pointer' data-aos="flip-up" data-aos-duration="500">
            <div className='flex justify-center '>
                <img className='w-14 h-14 md:w-20 md:h-20 mb-3' src={image} alt="" />
            </div>
            <h3 className='text-xl md:text-2xl font-semibold capitalize text-center'>{title}</h3>
        </div>
    );
};

export default Feature;