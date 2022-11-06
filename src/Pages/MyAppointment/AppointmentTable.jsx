import React, { useEffect, useState } from 'react';
import { FcFullTrash } from 'react-icons/fc';

const AppointmentTable = ({ order, index, deleteAppointment }) => {
    const { _id, Date, email, name, serviceId, contact, comments, status } = order;
    const [service, setServices] = useState({})

    useEffect(() => {
        fetch(`https://auto-car-server.vercel.app/singleServices/${serviceId}`)
            .then(req => req.json())
            .then(data => {
                setServices(data[0])
            })
    }, [serviceId])

    return (
        <tr className='select-none'>
            <td>
                {index + 1}
            </td>
            <td>
                <div className='flex gap-5'>
                    <img className='w-32' src={service?.img} alt="service" />
                    <div className='text-left'>
                        <h4 className='font-semibold text-xl'>Service Name : {service?.title}</h4>
                        <p className='font-semibold text-gray-500 '>Name : {name}</p>
                        <p className='font-semibold text-gray-500 '>Price : {service?.price}</p>
                        <p className='font-semibold text-error'>Date : {Date}</p>
                        <p className='font-semibold '>Comments : {comments ? comments : "no comments"}</p>
                    </div>
                </div>
            </td>

            <td>
                {email}
            </td>
            <td>{contact}</td>
            <td >
                <span className={status ? "bg-green-300 p-2 rounded-lg" : 'text-red-500 border-2 border-red-500 p-2 rounded-lg'}>{status ? status : "Pending"}</span>
            </td>
            <td>
                {
                    !status ? <span onClick={() => deleteAppointment(_id)} className='flex justify-center items-center cursor-pointer gap-4'>Delete
                        <FcFullTrash className='text-2xl' /> </span> : "Approved"
                }
            </td>
        </tr>
    );
};

export default AppointmentTable;