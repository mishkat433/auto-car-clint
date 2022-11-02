import React from 'react';
// import { toast } from 'react-toastify';

const AddServices = () => {
    // const [service, setProduct] = useState({});

    // const submitHandle = (e) => {
    //     // if (service?.name && service?.price && service?.photo) {
    //     //     fetch("https://auto-car-server.vercel.app/admin/addServices", {
    //     //         method: "POST",
    //     //         headers: {
    //     //             "content-type": "application/json"
    //     //         },
    //     //         body: JSON.stringify(service)
    //     //     })
    //     //         .then(res => res.json())
    //     //         .then(data => {
    //     //             if (data.acknowledged) {
    //     //                 toast("Product added Successfully")
    //     //                 setProduct({})
    //     //                 e.target.reset()
    //     //             }
    //     //             else {
    //     //                 alert("user is not created")
    //     //             }
    //     //         })
    //     // }
    //     e.preventDefault()
    // }
    // const addProductHandle = (e) => {
    //     setProduct({ ...service, [e.target.name]: e.target.value })
    // }
    return (
        <div>
            <h4 className='text-center font-semibold text-4xl my-3'>Add Sercice</h4>
            <div className="w-1/2 mx-auto">
                <h1 className='text-2xl'>Comming soon, Developed is sleeping now!</h1>
                {/* <form onSubmit={submitHandle} className="card-body">
                    <div className="form-control">
                        <label className="label" htmlFor='name'>
                            <span className="label-text">Product Name : </span>
                        </label>
                        <input type="text" onBlur={addProductHandle} defaultValue={service?.name} placeholder="product name : " name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor='price'>
                            <span className="label-text">Product Price : </span>
                        </label>
                        <input type="number" onBlur={addProductHandle} defaultValue={service?.price} placeholder="product price" name='price' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label" htmlFor='photo'>
                            <span className="label-text">Product Phot URL : </span>
                        </label>
                        <input type="text" onBlur={addProductHandle} defaultValue={service?.photo} placeholder="product photo url" name='photo' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Add Product</button>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-error" onClick={() => setProduct({})} type="reset" value="Clear" />
                    </div>
                </form> */}
            </div>
        </div>
    );
};

export default AddServices;