import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }


    return (
        <div className='mt-8 text-center'>
            <ButtonGroup className='mt-5 ' vertical>
      <Button className='mb-2' variant="outline-success"> Login With Email</Button>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary">Login With Google</Button>
      <Button variant="outline-dark">Login With GitHub</Button>

     
    </ButtonGroup>
        </div>
    );
};

export default Login;