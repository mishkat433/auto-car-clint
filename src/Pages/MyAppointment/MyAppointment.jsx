import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import heaerBg from "../../assets/images/banner/6.jpg"
import { AuthContex } from '../../Contex/AuthProvider/AuthProvider';
import AppointmentTable from './AppointmentTable';

const MyAppointment = () => {
    const { loginUser, logout } = useContext(AuthContex)
    const [appointment, setAppointment] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch(`https://auto-car-server.vercel.app/appointment?email=${loginUser?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("car-token")}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setAppointment(data)
                setLoading(false)
            })
    }, [loginUser?.email, logout])

    const deleteAppointment = (id) => {
        const confirm = window.confirm("do you want to delete this item?")
        if (confirm) {
            fetch(`https://auto-car-server.vercel.app/deleteAppointment/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast("successfully dedete")
                        const remaining = appointment.filter(ap => ap._id !== id)
                        setAppointment(remaining)
                    }
                })
        }
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className=' bg-no-repeat h-52 md:h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${heaerBg})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-3xl lg:text-5xl font-bold ml-5 lg:ml-24'> My Appontment</h1>
            </div>
            <div className=" w-full mt-10 overflow-x-auto">
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th className='w-1/12'>SL No </th>
                            <th className='w-4/12'>Details</th>
                            <th className='w-3/12'>Email</th>
                            <th className='w-2/12'>Number</th>
                            <th className='w-1/12'>Status</th>
                            <th className='w-1/12'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment?.map((order, index) => <AppointmentTable order={order} index={index} deleteAppointment={deleteAppointment} key={order._id} />)
                        }

                    </tbody>
                </table>
                {
                    loading && <div className='flex justify-center mt-32'><button className="btn loading">loading...</button></div>
                }
                {
                    appointment.length === 0 && <p className='text-red-500 text-xl text-center'>You have no appointment</p>
                }
            </div>
        </div>
    );
};

export default MyAppointment;