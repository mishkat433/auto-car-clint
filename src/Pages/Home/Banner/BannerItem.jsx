import React from 'react';
import './Banner.css'

const BannerItem = ({ singleItem }) => {
    const { img, id, next, prev } = singleItem;
    return (
        <div id={id} className="carousel-item relative w-full">
            <div className='carousalImage h-full'>
                <img src={img} className="w-full" alt='slide' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 lg:left-24 top-1/4">
                <h1 className='text-2xl lg:text-6xl font-bold text-white'>
                    Affordable <br className='hidden lg:block' />
                    Price for Car <br className='hidden lg:block' />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-full lg:w-2/5 left-5 lg:left-24 top-1/2">
                <p className='lg:text-xl text-md text-white mt-2 lg:mt-0'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-1/5 lg:w-2/5 left-5 mt-2 lg:mt-0 lg:left-24 top-3/4">
                <button className="btn bg-orange-600 mr-5">Discover More</button>
                <button className="btn btn-outline border-2 border-orange-600 text-white hover:bg-orange-600">Latest project</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 right-2 lg:right-20 gap-8 bottom-1/2">
                <a href={`#${prev}`} className="btn btn-circle hover:bg-orange-600">❮</a>
                <a href={`#${next}`} className="btn btn-circle hover:bg-orange-600">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;