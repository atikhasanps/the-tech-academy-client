import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses =useLoaderData();
    return (
        <div className='w-25 mx-auto '>
            <h2 className='rounded p-3 bg-primary'>{courses.name}</h2>
        </div>
    );
};

export default Checkout;