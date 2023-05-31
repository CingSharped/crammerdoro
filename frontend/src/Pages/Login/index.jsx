import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '../../context';

import logo from '../../assets/Cramodoro Logo.png'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post('http://localhost:3000/users/login', {
                username,
                password,
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;

            if (response.status === 200) {
                const { username, _id, token } = data;
                setUser({
                    username,
                    _id,
                    token
                });
                // console.log(user);
                navigate('/dashboard');
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Login failed:', error);
        }

    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 mx-auto d-flex justify-content-center vh-100 align-items-center">
                    <div className="card card-body" id="login-card">
                        <div className="login-top">
                            <img src={logo} alt="logo" width="100px" />
                            <h2>Login</h2>
                        </div>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="username" className="form-group">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    autoFocus
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
                                    Log in
                                </Button>
                            </div>
                        </Form>

                        <p className="small-xl pt-3 text-center">
                            <span className="text-muted">No account? </span>
                            <Link to="/register">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login
