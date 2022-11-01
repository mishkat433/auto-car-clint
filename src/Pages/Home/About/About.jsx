import React from 'react';
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
    return (
        <div className="my-20" >
            <div className="flex flex-col justify-between items-center gap-10 lg:flex-row">
                <div className='w-1/2 relative' data-aos="fade-right">
                    <img className='w-4/5 h-[450px]' src={person} alt="about" />
                    <img className='absolute -bottom-6 right-28 w-2/5 h-[300px] border-orange-500 border-8 rounded-xl' src={parts} alt="about" />
                </div>
                <div className='w-1/2' data-aos="fade-left">
                    <h2 className='text-orange-600 font-bold text-xl' >About</h2>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-orange-600 border-none">Get more info</button>
                </div>
            </div>
        </div >
    );
};

export default About;