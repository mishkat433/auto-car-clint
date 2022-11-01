import React from 'react';
import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";
import Product from './Product';

const productsData = [
    {
        id: 1,
        img: img1,
        title: "Hydraulic Break",
        price: 18.00
    },
    {
        id: 2,
        img: img2,
        title: "Manual Break",
        price: 25.00
    },
    {
        id: 3,
        img: img3,
        title: "Car Air Filter",
        price: 32.00
    },
    {
        id: 4,
        img: img4,
        title: "ultra Battery",
        price: 18.00
    },
    {
        id: 5,
        img: img5,
        title: "Car Eagle Tyrr",
        price: 12.00
    },
    {
        id: 6,
        img: img6,
        title: "Car Enging Tools",
        price: 40.00
    },
]

const Products = () => {

    return (
        <div className='py-10' >
            <div className='text-center w-full md:w-1/2 mx-auto'>
                <h2 className='text-orange-600 font-bold text-xl mb-3' >Popular Products</h2>
                <h1 className='text-5xl font-bold mb-3'>Browse Our Products</h1>
                <p className='text-lg'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {
                    productsData.map(product => <Product product={product} key={product.id} />)
                }
            </div>
            <div className='flex justify-center mt-14'>
                <button className='btn bg-orange-600 border-none '>Show more</button>
            </div>
        </div>
    );
};

export default Products;