
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import './Header.css';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const Header = () => {
    const {user} = useContext(AuthContext)
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
                    <Link className='link text-white'>
                        
                       {user?.displayName}
                    
                    </Link>
                    <Link>
                    {
                        user?.photoURL ?
                        <Image
                        style={{height:'30px'}}
                        roundedCircle
                        src={user?.photoURL}
                        ></Image>
                        :
                        <FaUser></FaUser>
                    }
                    
                    </Link>
                </div>
            </div>
           </div>
        
    );
};

export default Header;