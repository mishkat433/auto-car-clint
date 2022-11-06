import React, { useEffect, useState } from 'react';
import { FcFullTrash } from 'react-icons/fc';

const ManageTable = ({ order, index, deleteAppointment, handleStatus }) => {

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
        <tr>
            <td>
                {index + 1}
            </td>
            <td>
                <div className='flex gap-5'>
                    <img className='w-32 lg:w-52 rounded-md' src={service?.img} alt="service" />
                    <div className='text-left'>
                        <p>Product Id : {service._id}</p>
                        <p>Order Id : {_id}</p>
                        <h4 className='font-semibold text-xl'>Service Name : {service?.title}</h4>
                        <p className='font-semibold text-gray-500 '>Name : {name}</p>
                        <div className='flex gap-10'>
                            <p className='font-semibold text-gray-500 '>Price : {service?.price}</p>
                            <p className='font-semibold text-error'>Date : {Date}</p>
                        </div>
                        <p className='font-semibold '>Comments : {comments ? comments : "no comments"}</p>
                    </div>
                </div>
            </td>
            <td>
                {email}
            </td>
            <td>{contact}</td>
            <td >
                {
                    status === undefined ? <span onClick={() => handleStatus(_id)}
                        className={status ? 'text-red-500 btn btn-outline btn-success p-2 cursor-pointer rounded-lg' : 'text-red-500 border-2 border-red-500 p-2 cursor-pointer rounded-lg'} >
                        Pending</span>
                        :
                        <span
                            className={status ? 'text-red-500 btn btn-outline btn-success p-2 cursor-pointer rounded-lg' : 'text-red-500 border-2 border-red-500 p-2 cursor-pointer rounded-lg'} >
                            {status ? status : "pending"}</span>
                }

            </td>
            <td><span onClick={() => deleteAppointment(_id)} className='flex justify-center items-center cursor-pointer gap-4'>Delete
                <FcFullTrash className='text-2xl' />
            </span> </td>
        </tr>
    );
};

export default ManageTable;