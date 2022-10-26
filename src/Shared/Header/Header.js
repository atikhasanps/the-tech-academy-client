
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

           <div className='header mb-5 '>
                <div className='w-75 mx-auto d-flex justify-content-between align-items-center'>
                <div className='d-flex judti'>
                    <div><img className='image' src='Simple Circle Logo.png' alt=''/></div>
                    <div><h2 className='text-white'>The Tech Academy</h2></div>
                </div>
                <div className='align-items-center'>
                <Link className='link me-5 text-white' to='/'>Home</Link>
                    <Link className='link me-5 text-white' to='/courses'>Courses</Link>
                    <Link className='link me-5 text-white' to='/faq'>FAQ</Link>
                    <Link className='link me-5 text-white' to='blog'>Blog</Link>
                    <Link className='link me-5 text-white' to='login'>Login</Link>
                </div>
            </div>
           </div>
        
    );
};

export default Header;