import React from 'react';
import { FaCalendarAlt, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';

const contactData = [
    {
        id: 1,
        icon: <FaCalendarAlt />,
        title: "We are open monday-friday",
        details: "7:00 am - 9:00 pm"
    },
    {
        id: 2,
        icon: <FaPhoneAlt />,
        title: "Have a question?",
        details: "+2546 251 2658"
    },
    {
        id: 3,
        icon: <FaLocationArrow />,
        title: "Need a repair? our address",
        details: "Liza Street, New York"
    },
]
const Contact = () => {
    return (
        <div className='py-5 md:py-10' data-aos="flip-up">
            <div className='bg-black flex flex-col md:flex-row justify-around  rounded-xl p-5 md:p-0'>
                {
                    contactData.map(contact =>
                        <div key={contact.id} className="text-white py-5 md:py-16 flex flex-col md:flex-row items-center gap-5">
                            <div className='text-5xl text-orange-600'>{contact.icon}</div>
                            <div>
                                <p>{contact.title}</p>
                                <h4 className='md:text-3xl text-xl'>{contact.details} </h4>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Contact;