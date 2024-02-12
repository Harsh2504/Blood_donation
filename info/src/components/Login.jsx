import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'

export const Login = () => {
    return (
        <div className="main">
            <div className='login mt-4 mb-4 container'>
                <div className='login-header'>Login</div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="btn btn-outline-dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
