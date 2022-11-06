import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContex } from '../../Contex/AuthProvider/AuthProvider';
import ManageTable from './ManageTable';
import fire from "../../assets/amination/19267-character-with-gun-firing.gif";

const ManageAppointment = () => {
    const { logout, findAdmin } = useContext(AuthContex)
    const [appointment, setAppointment] = useState([])
    const [loading, setLoading] = useState(false)
    // https://auto-car-server.vercel.app
    useEffect(() => {
        setLoading(true)
        fetch(`https://auto-car-server.vercel.app/appointment`, {
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
    }, [logout])

    const handleStatus = (id) => {
        const confirm = window.confirm("Do you approved this order?")
        if (confirm) {
            fetch(`https://auto-car-server.vercel.app/appointmentStatus/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'Approved' })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        const remaining = appointment.filter(odr => odr._id !== id);
                        const approving = appointment.find(odr => odr._id === id);
                        approving.status = 'Approved'

                        const newOrders = [approving, ...remaining];
                        setAppointment(newOrders);
                    }
                })
        }
    }

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
            <h4 className='text-center font-semibold text-2xl lg:text-4xl my-3'>Manage Appointment</h4>
            {loading && <div className='flex justify-center mt-10'><button className="btn loading">loading...</button></div>}
            {
                findAdmin ? <div className=" w-full px-5 overflow-x-auto">
                    <table className="table w-full text-center">
                        <thead>
                            <tr>
                                <th>SL No </th>
                                <th>Details</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointment?.map((order, index) => <ManageTable order={order} index={index} handleStatus={handleStatus} deleteAppointment={deleteAppointment} key={order._id} />)
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <th>SL No </th>
                                <th>Image</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </tfoot>
                    </table>
                </div> :
                    <div className={loading ? "hidden" : 'flex flex-col justify-center items-center mt-10'}>
                        <h1 className='text-4xl font-semibold text-center my-3'>Yor are not Admin</h1>
                        <img className='w-52 md:w-96' src={fire} alt="fire" />
                        <p>email: testing@gmail.com, password: Testing123</p>
                    </div>
            }
        </div>
    );
};

export default ManageAppointment;