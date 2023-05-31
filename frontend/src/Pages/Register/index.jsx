import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import logo from '../../assets/Cramodoro Logo.png'

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
      
        const requestData = {
          username,
          password,
        };
      
        try {
          const response = await axios.post('http://localhost:3000/users/signup', requestData);
      
          if (response.status === 201) {
            navigate('/login'); 
          } else {
            alert('User already exists');
          }
        } catch (error) {
          console.error('Registration failed:', error);
        }
    };
      

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mx-auto d-flex justify-content-center vh-100 align-items-center">
                    <div className="card card-body" id="register-card">
                        <div className="register-top">
                            <img src={logo} alt="logo" width="100px" />
                            <h2>Register</h2>
                        </div>
                        <Form onSubmit={handleRegister}>

                            <Form.Group controlId="username" className="form-group">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="password" className="form-group">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <div className="pt-2 d-grid gap-2 col-12 mx-auto">
                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </div>
                        </Form>

                        <p className="small-xl pt-3 text-center">
                            <span className="text-muted">Already registered? </span>
                            <Link to="/login">Log in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
