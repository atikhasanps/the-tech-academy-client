import { createBrowserRouter } from "react-router-dom";
import Checkout from "../../Checkout/Checkout";
import CourseCategories from "../../CourseCategories/CourseCategories";
import CourseDetails from "../../CourseDetails/CourseDetails";

import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },


            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:({params}) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path:'/courseCategories/:id',
                element:<CourseCategories></CourseCategories>,
                loader: ({params}) =>fetch(`http://localhost:5000/courses/${params.id}`)
                
            },
            {
                path:'/coursedetails/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params}) =>fetch(`http://localhost:5000/courses/${params.id}`)
                
            },

            {
                path:'/checkout/:id',
                element:<Checkout></Checkout>,
                loader: ({params}) =>fetch(`http://localhost:5000/courses/${params.id}`)
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])