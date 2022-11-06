import React, { useContext, useEffect, useState } from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { AuthContex } from '../../../Contex/AuthProvider/AuthProvider';

const ManageAdmin = () => {
    const { loginUser } = useContext(AuthContex);
    const [allAdmin, setAddAdmin] = useState([]);
    const [admin, setAdmin] = useState(null);
    const [depend, setDepend] = useState(true)


    useEffect(() => {
        fetch("https://auto-car-server.vercel.app/admin")
            .then(res => res.json())
            .then(data => setAddAdmin(data))
    }, [depend])

    const adminDeleteHandle = (id) => {
        const confirm = window.confirm("Do you want to delete this admin")
        if (confirm) {
            fetch(`https://auto-car-server.vercel.app/admin/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        toast("Admin delete successfully")
                        setDepend(!depend)
                    }
                })
        }
    }

    const submitHandle = (e) => {
        console.log(admin);
        if (admin.email) {
            fetch("https://auto-car-server.vercel.app/admin/addAdmin", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(admin)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast("Admin added Successfully")
                        setAdmin({})
                        e.target.reset()
                        setDepend(!depend)
                    }
                })
        }
        e.preventDefault()
    }

    const adminHandle = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h4 className='text-center font-semibold text-4xl my-3'>Manage Admin</h4>
            <div className="w-full lg:w-1/2 mx-auto">
                <form onSubmit={submitHandle} className="card-body">
                    <div className="form-control">
                        <label className="label" htmlFor='Email'>
                            <span className="label-text">Email : </span>
                        </label>
                        <input type="email" placeholder="admin email:" onBlur={adminHandle} name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary" disabled={loginUser?.email === "testing@gmail.com" ? true : false}>Add As Admin</button>
                    </div>
                </form>
            </div>
            <h4 className='text-center font-semibold text-2xl my-3'>Admin List</h4>
            <div className=" w-full px-5 overflow-x-auto">
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th>SL No </th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allAdmin.map((ad, index) =>
                                <tr key={index} className={loginUser.email === "testing@gmail.com" ? "hidden" : undefined}>
                                    <th>{index + 1}</th>
                                    <td> {ad.email}</td>
                                    <td><span className='flex justify-center items-center cursor-pointer gap-4' onClick={() => adminDeleteHandle(ad._id)}>Delete<FcFullTrash className='text-2xl' /> </span> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {
                    loginUser.email === "testing@gmail.com" && <p className='text-center text-red-500 mt-5'>All features are not allow for the Tester</p>
                }
            </div>
        </div>
    );
};

export default ManageAdmin;