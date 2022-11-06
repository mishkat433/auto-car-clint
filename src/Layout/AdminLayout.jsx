import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContex } from '../Contex/AuthProvider/AuthProvider';
import Footer from '../Pages/common/Footer/Footer';
import Header from '../Pages/common/Header/Header';
import Sidebar from '../Pages/common/Sidebar/Sidebar';
import fire from "../assets/amination/19267-character-with-gun-firing.gif";

const AdminLayout = () => {
    const { loginUser } = useContext(AuthContex)
    const [findAdmin, setFindAdmin] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        fetch(`https://auto-car-server.vercel.app/admin?email=${loginUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setFindAdmin(data[0].email)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
            })
    }, [loginUser])

    return (
        <div >
            <Header />
            {loading && <div className='flex justify-center mt-32'><button className="btn loading">loading</button></div>}
            {
                findAdmin ?
                    <div className='flex flex-col lg:flex-row  w-11/12 mx-auto '>
                        <div className='w-full lg:w-1/5'>
                            <Sidebar />
                        </div>
                        <div className='w-full lg:w-4/5 bg-gray-200 rounded-lg'>
                            <Outlet />
                        </div>
                    </div> :
                    <div className={loading ? "hidden" : 'flex flex-col justify-center items-center mt-10'}>
                        <h1 className='text-4xl font-semibold text-center my-3'>Yor are not Admin</h1>
                        <img className='w-52 md:w-96' src={fire} alt="fire" />
                        <p className='text-xl text-red-500'>For testing admin login: email: testing@gmail.com, password: Testing123</p>
                    </div>
            }
            <Footer />
        </div>
    );
};

export default AdminLayout;