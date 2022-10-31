import React from 'react';
import img1 from "../../../assets/icons/group.svg";
import img2 from "../../../assets/icons/clock.svg";
import img3 from "../../../assets/icons/person.svg";
import img4 from "../../../assets/icons/Wrench.svg";
import img5 from "../../../assets/icons/check.svg";
import img6 from "../../../assets/icons/deliveryt.svg";
import Feature from './Feature';

const featuresData = [
    {
        id: 101,
        image: img1,
        title: "Expert Team"
    },
    {
        id: 102,
        image: img2,
        title: "timely delivery"
    },
    {
        id: 103,
        image: img3,
        title: "24/7 support"
    },
    {
        id: 104,
        image: img4,
        title: "best equipment"
    },
    {
        id: 105,
        image: img5,
        title: "100% guranty"
    },
    {
        id: 106,
        image: img6,
        title: "Fast services"
    }
]


const Features = () => {
    return (
        <div className='py-2 md:py-16'>
            <div className='text-center w-full md:w-1/2 mx-auto'>
                <h2 className='text-orange-600 font-bold text-xl mb-3' >Core Features</h2>
                <h1 className='text-5xl font-bold mb-3'>Why Chose Us</h1>
                <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-14'>
                {
                    featuresData.map(feature => <Feature feature={feature} key={feature.id} />)
                }
            </div>
        </div>
    );
};

export default Features;