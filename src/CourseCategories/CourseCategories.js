import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseCategories.css'
const CourseCategories = () => {
    const [coursecategories, setCoursecategories] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:5000/course-categories')
        .then(res => res.json())
        .then(data => setCoursecategories(data));
    },[])
    return (
        <div>
            <h2 >Course Category</h2>
            <div className='course'>
                {
                    coursecategories.map(coursecategorie =><p 
                        

                    key={coursecategorie.id}>
                    <Link className='link fs-3' 
                    to={`/coursedetails/${coursecategorie.id}`}>{coursecategorie.name}</Link>
                    
                    </p>)
                    
                }
            </div>
        </div>
    );
};

export default CourseCategories;