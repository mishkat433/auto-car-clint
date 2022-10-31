import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginImg from "../../assets/images/login/login.svg"
import { AuthContex } from '../../Contex/AuthProvider/AuthProvider';

const Register = () => {
    const { googleSiginIn, createUser, profileUpdate } = useContext(AuthContex)
    const [formData, setFormData] = useState({});
    const [showPass, setshowPass] = useState(false);
    const [error, setError] = useState("")

    const googleSiginHandle = () => {
        googleSiginIn()
            .then(result => { })
            .catch(err => setError(err.message))
    }

    const submitHandle = (e) => {
        if (formData?.email) {
            if (formData?.password) {
                createUser(formData.email, formData.password)
                    .then(result => {
                        profileUpdate(formData?.name, formData?.password)
                            .then(result => { }).catch(err => setError(err.message))
                        alert("usercreate successfull")
                    })
                    .catch(err => setError(err.message))
                setError("")
            }
            else {
                setError("password must be uppercase, lowercase and dist")
            }
        }
        else {
            setError("please enter valid email");
        }
        e.preventDefault()
    }

    const formHandle = (e) => {
        let isValid = true
        if (e.target.name === "email") {
            isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)
        }
        if (e.target.name === "password") {
            isValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(e.target.value)
        }

        if (isValid) {
            setFormData({ ...formData, [e.target.name]: e.target.value })
            setError("")
        }
        else {
            setError(`Your ${e.target.name} is not valid`)
            setFormData({ ...formData, [e.target.name]: "" })
        }
    }

    return (
        <div className="w-11/12 mx-auto my-10 ">
            <div className="flex justify-around items-center gap-10">
                <div className="text-center lg:text-left ">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card shadow-2xl  w-2/5">
                    <form className="card-body " onSubmit={submitHandle}>
                        {error && <p className='text-center text-red-600 '>{error}</p>}
                        <div className="form-control">
                            <h1 className='text-center text-3xl font-bold'>Register</h1>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" onChange={formHandle} defaultValue={formData?.name} name="name" placeholder="full name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" onChange={formHandle} defaultValue={formData?.photo} name="photo" placeholder="photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" onChange={formHandle} defaultValue={formData?.email} name="email" placeholder="your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} onChange={formHandle} defaultValue={formData?.password} name="password" placeholder="your password" className="input input-bordered" />
                        </div>

                        <div className='flex items-center gap-3'>
                            <input onClick={() => setshowPass(!showPass)} type="checkbox" name="check" id="" className='w-5 h-5' />
                            <label htmlFor="check">Show password</label>
                        </div>
                        <div className="form-control">
                            <button type='submit' className="btn bg-orange-600 border-none">Login</button>
                        </div>
                        <h5 className='text-center'>or Sign in with</h5>
                    </form>
                    <div className='flex justify-evenly mb-3'>
                        <button onClick={googleSiginHandle} className='bg-gray-300 p-3 rounded-full text-orange-600 text-xl'><FaGoogle /></button>
                        <button className='bg-gray-300 p-3 rounded-full text-blue-600 text-xl'><FaFacebookF /></button>
                        <button className='bg-gray-300 p-3 rounded-full text-blue-800 text-xl'><FaLinkedinIn /></button>

                    </div>
                    <p to="/" className='text-center text-lg mb-10'>Already have an account?
                        <Link to="/login" className='font-bold text-orange-600'>Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Register;