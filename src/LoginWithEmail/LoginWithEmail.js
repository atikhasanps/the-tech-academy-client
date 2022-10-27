import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
const LoginWithEmail = () => {

    const {signIn} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password =form.password.value;
       


        signIn(email, password)
        .then(result =>{
            const user =result.user;
            console.log(user);
            form.reset();
        })
        .catch(e => console.error(e));
    }


    return (
        <div className='w-50 mx-auto'>
            <Form onClick={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p><Link to='/register'>Are You New? Please Register.</Link></p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </div>
    );
};

export default LoginWithEmail;