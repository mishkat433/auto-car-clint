import React from 'react';
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import Slider from "react-slick";
import "./Team.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const teamData = [
    {
        id: 1,
        image: img1,
        title: "Car Engine Plug",
        expartIn: "Enging Expart",
    },
    {
        id: 2,
        image: img2,
        title: "Car Engine Plug",
        expartIn: "Enging Expart",
    },
    {
        id: 3,
        image: img3,
        title: "Car Engine Plug",
        expartIn: "Enging Expart"
    },
    {
        id: 4,
        image: img1,
        title: "Car Engine Plug",
        expartIn: "Enging Expart"
    },
]

const Teems = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 1000,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    centerPadding: "60px",
                    dots: true,
                    nextArrow: <SampleNextArrow />,
                    prevArrow: <SamplePrevArrow />,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "1px",
                    nextArrow: null,
                    prevArrow: null,
                }
            }
        ]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray", }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className='py-2 md:py-16'>
            <div className='text-center w-full md:w-1/2 mx-auto'>
                <h2 className='text-orange-600 font-bold text-xl mb-3' >Teems</h2>
                <h1 className='text-5xl font-bold mb-3'>Meet Our Team</h1>
                <p className='text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>

            <div>
                <h2> Responsive </h2>
                <Slider {...settings}>
                    {
                        teamData.map(tem => <div className='border-2 p-3 rounded-lg' key={tem.id}>
                            <img className='rounded-lg' src={tem.image} alt="slide" />
                            <div className='mt-3 text-center'>
                                <h4 className='text-2xl font-bold'>{tem.title}</h4>
                                <p className='text-xl font-semibold mt-2'>{tem.expartIn}</p>
                                <div className='mt-3 flex justify-evenly'>
                                    <Link to="/" className='text-white bg-blue-900 p-2 rounded-full text-xl hover:scale-110 duration-300'><FaFacebookF /></Link>
                                    <Link to="/" className='text-white bg-blue-400 p-2 rounded-full text-xl hover:scale-110 duration-300'><FaTwitter /></Link>
                                    <Link to="/" className='text-white bg-blue-700 p-2 rounded-full text-xl hover:scale-110 duration-300'><FaLinkedinIn /></Link>
                                    <Link to="/" className='text-white bg-gradient-to-tl from-purple-600 to-red-500 p-2 rounded-full text-xl hover:scale-110 duration-300'><FaInstagram /></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>

        </div>
    );
};

export default Teems;