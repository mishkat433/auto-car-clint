import React from 'react';
import './Banner.css'

const BannerItem = ({ singleItem }) => {
    const { img, id, next, prev } = singleItem;
    return (
        <div id={id} className="carousel-item relative w-full">
            <div className='carousalImage h-full'>
                <img src={img} className="w-full" alt='slide' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn bg-orange-600 mr-5">Discover More</button>
                <button className="btn btn-outline border-2 border-orange-600 text-white hover:bg-orange-600">Latest project</button>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 right-20 gap-8  bottom-1/2">
                <a href={`#${prev}`} className="btn btn-circle hover:bg-orange-600">❮</a>
                <a href={`#${next}`} className="btn btn-circle hover:bg-orange-600">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;