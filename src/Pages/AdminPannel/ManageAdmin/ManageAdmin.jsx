import React, { useState } from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { toast } from 'react-toastify';

const ManageAdmin = () => {
    const [admin, setAdmin] = useState("")

    const submitHandle = (e) => {

        if (admin.name && admin.price && admin.photo) {

            fetch("url", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(admin)
            })
                .then(res => res.json())
                .then(data => {
                    toast("Admin added Successfully")
                    setAdmin({})
                })
        }
        e.preventDefault()
    }
    return (
        <div>
            <h4 className='text-center font-semibold text-4xl my-3'>Manage Admin</h4>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submitHandle} className="card-body">
                    <div className="form-control">
                        <label className="label" htmlFor='Email'>
                            <span className="label-text">Email : </span>
                        </label>
                        <input type="email" placeholder="admin email: " name='email' className="input input-bordered" />
                    </div>

                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Add As Admin</button>
                    </div>
                </form>
            </div>
            <h4 className='text-center font-semibold text-2xl my-3'>Admin List</h4>
            <div className=" w-full px-5">
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th>SL No </th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>

                            </th>
                            <td>
                                imgage
                            </td>
                            <td>
                                mishkat 433@gmail.com
                            </td>
                            <td><span className='flex justify-center items-center cursor-pointer gap-4'>Delete<FcFullTrash className='text-2xl' /> </span> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAdmin;