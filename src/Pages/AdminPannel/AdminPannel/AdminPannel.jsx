import React, { useContext, useEffect, useState } from 'react';
import adminPannel from "../../../assets/amination/adminPage.gif"
import { AuthContex } from '../../../Contex/AuthProvider/AuthProvider';
import fire from "../../../assets/amination/19267-character-with-gun-firing.gif";

const AdminPannel = () => {
    const { loginUser } = useContext(AuthContex)
    const [findAdmin, setFindAdmin] = useState("")

    useEffect(() => {
        fetch(`http://localhost:5000/admin?email=${loginUser?.email}`)
            .then(res => res.json())
            .then(data => setFindAdmin(data[0].email))
    }, [loginUser])

    return (
        <div className='h-[80vh]'>
            {
                findAdmin ? <div className='flex flex-col justify-center items-center '>
                    <h1 className='text-4xl font-semibold text-center my-3'>Welcome to Admin Pnnel</h1>
                    <img className='w-96 h-96 mt-10' src={adminPannel} alt="" />
                </div>
                    :
                    <div className='flex flex-col justify-center items-center mt-10'>
                        <h1 className='text-4xl font-semibold text-center my-3'>Yor are not Admin, you are a thief</h1>
                        <img className='w-52 md:w-96' src={fire} alt="fire" />
                        <p>email: testing@gmail.com, password: Testing123</p>
                    </div>
            }

        </div>
    );
};

export default AdminPannel;