import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContex } from '../../Contex/AuthProvider/AuthProvider';

const Profile = () => {
    const { loginUser, findAdmin, profileUpdate, emailUpdate } = useContext(AuthContex)
    const [formData, setFormData] = useState({
        email: loginUser?.email,
        name: loginUser?.displayName,
        photo: loginUser?.photoURL
    })

    const updateProfileHandle = (e) => {
        if (loginUser.displayName !== formData.name && loginUser.photoURL !== formData.photo) {
            profileUpdate(formData.name, formData.photo)
                .then(() => {
                    toast("Profile update successful")
                }).catch((error) => {
                    console.log(error.message);
                });
        }
        if (loginUser.email !== formData.email) {
            emailUpdate(formData.email)
        }
        e.preventDefault();
    }

    const changeHandle = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className='w-11/12 mx-auto my-10 '>
            <div className='flex justify-center mb-5'>
                <div className="avatar online ">
                    <div className="w-40 rounded-full">
                        <img className='w-32' src={loginUser.photoURL} alt="profile" />
                    </div>
                </div>
            </div>
            <form onSubmit={updateProfileHandle} className='w-1/2 mx-auto'>
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                    <div className="col-span-full ">
                        <label htmlFor="username" className="text-sm">Username</label>
                        <input id="username" name='name' onChange={changeHandle} type="text" placeholder="Username" defaultValue={formData?.name} className="w-full h-10 p-2 rounded-md border-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="website" className="text-sm">Email</label>
                        <input id="website" name='email' onChange={changeHandle} type="email" placeholder="example@gmail.com" defaultValue={formData?.email} className="w-full h-10 p-2 rounded-md border-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="website" className="text-sm">Photo URL</label>
                        <input id="website" photo="photo" onChange={changeHandle} type="photo" placeholder="photo" defaultValue={formData?.photo} className="w-full h-10 p-2 rounded-md border-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                    </div>

                    <div className="col-span-full">
                        <div className="flex items-center space-x-2">
                            <button type='submit' disabled={findAdmin === 'testing@gmail.com' ? true : false} className="px-4 py-2 w-full btn btn-success rounded-md dark:border-gray-100">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Profile;