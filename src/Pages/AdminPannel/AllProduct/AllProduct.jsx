import React, { useEffect, useState } from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { FaPencilAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [change, setChange] = useState(null);
    const [close, setClose] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    const deleteProductHandle = (id) => {
        const confirm = window.confirm("Do you Want ot delete this product?")
        if (confirm) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        toast("product delete successfully")
                    }
                })
        }
    }

    const submitHandle = (e) => {

        fetch(`http://localhost:5000/productUpdate/${change._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(change)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast("product update successfully")
                    setClose(false)

                }
            })
        e.preventDefault()
    }

    const editHandle = (e) => {
        setChange({ ...change, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h4 className='text-center font-semibold text-2xl my-3'>All Products</h4>
            <div className=" w-full px-5">
                <table className="table table-zebra w-full text-center ">
                    <thead>
                        <tr>
                            <th>SL No. </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!products && <button className="btn loading">loading...</button>}
                        {
                            products.map((product, index) =>
                                <tr key={index} >
                                    <td className='w-1/12 mx-auto'>{index + 1}</td>
                                    <td className='w-2/12 mx-auto'>
                                        <img className='w-14 mx-auto ' src={product?.photo} alt="product" />
                                    </td>
                                    <td className='w-5/12 mx-auto'>{product?.name}</td>
                                    <td className='w-2/12 mx-auto'> ${product?.price}</td>
                                    <td className='w-2/12 mx-auto'><span className='flex justify-center items-center  gap-6'>
                                        <label htmlFor="my-modal-3" className="" onClick={() => setChange(product)}><FaPencilAlt onClick={() => setClose(true)} className=' text-xl cursor-pointer text-info' /></label>
                                        <FcFullTrash className='text-2xl cursor-pointer' onClick={() => deleteProductHandle(product._id)} /> </span> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {/* Modal start */}
            {close &&
                <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <div>
                                <h4 className='text-center font-semibold text-4xl my-3'>Update Product</h4>
                                <div className="w-full mx-auto">
                                    <form onSubmit={submitHandle} className="card-body">
                                        <div className="form-control">
                                            <label className="label" htmlFor='name'>
                                                <span className="label-text">Product Name : </span>
                                            </label>
                                            <input type="text" onBlur={editHandle} defaultValue={change?.name} placeholder="product name : " name='name' className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label" htmlFor='price'>
                                                <span className="label-text">Product Price : </span>
                                            </label>
                                            <input type="number" onBlur={editHandle} defaultValue={change?.price} placeholder="product price" name='price' className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label" htmlFor='photo'>
                                                <span className="label-text">Product Phot URL : </span>
                                            </label>
                                            <input type="text" onBlur={editHandle} defaultValue={change?.photo} placeholder="product photo url" name='photo' className="input input-bordered" />
                                        </div>
                                        <div className="form-control mt-6">
                                            <button type='submit' className="btn btn-primary">Update Product</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* Modal end */}
        </div>
    );
};

export default AllProduct;