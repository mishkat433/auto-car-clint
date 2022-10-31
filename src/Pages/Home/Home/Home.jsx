import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Feedbacks from '../Feedback/Feedbacks';
import Products from '../Products/Products';
import Teems from '../Teem/Teems';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner />
            <About />
            <Contact />
            <Products />
            <Teems />
            <Features />
            <Feedbacks />
        </div>
    );
};

export default Home;