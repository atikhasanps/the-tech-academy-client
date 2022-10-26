import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses =useLoaderData();
    return (
        <div className='w-25 mx-auto '>
            <h2 className=''>{courses.name}</h2>
        </div>
    );
};

export default Checkout;