import React from 'react';

const Feedbacks = () => {
    return (
        <div className='py-2 md:py-16'>
            <div className='text-center w-full md:w-1/2 mx-auto'>
                <h2 className='text-orange-600 font-bold text-xl mb-3' >Testimonial</h2>
                <h1 className='text-5xl font-bold mb-3'>What Customer Says</h1>
                <p className='text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14'>
                {/* {
                    featuresData.map(feature => <Feature feature={feature} key={feature.id} />)
                } */}
            </div>
        </div>
    );
};

export default Feedbacks;