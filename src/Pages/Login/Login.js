import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const {providerLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn=()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error => console.error(error))
    }

    const gitHubProvider =new  GithubAuthProvider();
    const handleGitHubSignIn =() =>{
        providerLogin(gitHubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/')
        })
        .catch(error =>console.error(error))
    }

    return (
        <div className='mt-8 text-center'>
            <ButtonGroup className='mt-5 ' vertical>
      <Link to='/loginwithEmail' className='mb-2' variant="outline-success"><Button> Login With Email</Button></Link>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary">Login With Google</Button>
      <Button onClick={handleGitHubSignIn} variant="outline-dark">Login With GitHub</Button>

     
    </ButtonGroup>
        </div>
    );
};

export default Login;