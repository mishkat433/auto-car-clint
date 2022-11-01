import React from 'react';

const ManageAppointment = () => {
    return (
        <div>
            <h4 className='text-center font-semibold text-2xl my-3'>Manage Appointment</h4>
            <div className=" w-full px-5">
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th>SL No </th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>
                                1
                            </td>
                            <td>
                                imgage
                            </td>
                            <td>
                                mishkat 433@gmail.com
                            </td>
                            <td>pending</td>
                            <td><span className='flex justify-center items-center cursor-pointer gap-4'>Delete
                                {/* <FcFullTrash className='text-2xl' />  */}
                            </span> </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageAppointment;