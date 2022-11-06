import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import heaerBg from "../../assets/images/banner/6.jpg"
import { AuthContex } from '../../Contex/AuthProvider/AuthProvider';

const Checkout = () => {
    const selectService = useLoaderData()
    const service = selectService[0]
    const { loginUser } = useContext(AuthContex)
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: loginUser?.email,
        serviceId: service?._id
    })

    const navigate = useNavigate()

    const checkoutHandle = (e) => {
        e.preventDefault()
        if (formData?.contact.length === 11 && formData.contact.startsWith("01")) {
            setError("")
            fetch("https://auto-car-server.vercel.app/postAppointment", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        e.target.reset()
                        toast("appointment confirm successful")
                        navigate('/services')
                    }
                })
        }
        else {
            setError("Contact Number is not valid")
        }

    }

    const formHandle = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className=' bg-no-repeat h-52 md:h-72 rounded-xl my-5 flex items-center' style={{ background: `linear-gradient(to right, #121212b0 40%,rgba(118, 118, 128, 0.20)), url(${heaerBg})`, backgroundPosition: "left" }}>
                <h1 className='text-white text-3xl lg:text-5xl font-bold ml-5 lg:ml-24'> Our Services</h1>
            </div>
            <div className='my-10 p-20 bg-base-200 rounded-xl'>
                <h1>{service._id}</h1>
                <h1>{service?.title}</h1>
                <div className="hero bg-base-200">
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        {error && <p className='text-center text-error my-2'>{error}</p>}
                        <form className="card-body" onSubmit={checkoutHandle}>
                            <div className='flex gap-5'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Nmae</span>
                                    </label>
                                    <input onBlur={formHandle} type="text" placeholder="full name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input onBlur={formHandle} type="number" placeholder="+880" name='contact' className="input input-bordered" required />
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Emil</span>
                                    </label>
                                    {
                                        loginUser.email ? <input type="email" placeholder="email" name="email" defaultValue={formData?.email} readOnly className="input input-bordered" /> :
                                            <input onBlur={formHandle} type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    }
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input onBlur={formHandle} type="date" placeholder="date" name='Date' className="input input-bordered" required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Comments</span>
                                </label>
                                <textarea onBlur={formHandle} name="comments" className="input input-bordered h-32 resize-none pt-1"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;