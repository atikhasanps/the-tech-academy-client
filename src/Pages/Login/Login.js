import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Login = () => {
    return (
        <div className='mt-8'>
            <ButtonGroup className='mt-5' vertical>
      <Button className='mb-2' variant="outline-success"> Login With Email</Button>
      <Button className='mb-2' variant="outline-primary">Login With Google</Button>
      <Button variant="outline-dark">Login With GitHub</Button>

     
    </ButtonGroup>
        </div>
    );
};

export default Login;