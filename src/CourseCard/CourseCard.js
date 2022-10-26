import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CourseCard = () => {
    
    const [courses, setCourses] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
    return (
       <div className=''>
                
                <div className=''>
                        {
                            courses.map(course=> 
                                
                                <div className=''  key={course.id}>
                                    <div className='border text-center w-75  mb-3'>
                                       
                                        <h2 className=''>{course.name}</h2><br/>
                                        <img className='w-75 mb-3' src={course.image}></img><br/>
                                        <button><Link className='link' to={`/coursedetails/${course.id}`}>Details</Link></button>
                                          
                                    </div>

                                </div>
                                
                                )
                        }
                </div>
       </div>
    );
};

export default CourseCard;
