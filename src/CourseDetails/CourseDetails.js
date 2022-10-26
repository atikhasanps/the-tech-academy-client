import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'


const CourseDetails = () => {
   

    const courses = useLoaderData();
    
 
    return (
        <div className='details w-50 mx-auto border p-5 rounded'>
        <h2 className='text-white'>{courses.header}</h2>
        <img className='w-50' src={courses.image} alt=''/>
        <p className='text-white'>{courses.description}</p>
           <Button><Link className='link text-white' to={`/checkout/${courses.id}`}>Get premium access</Link></Button>
        </div>
    );
};

export default CourseDetails;