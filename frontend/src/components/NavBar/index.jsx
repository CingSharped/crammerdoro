import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Alert } from 'react-bootstrap';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context';
import logo from '../../assets/Cramodoro Favicon.png'


import { PomodoroTimer, BootstrapAlert } from '..'

const styles = ({ isActive }) => ({ color: isActive ? '#ECD444' : 'black' });

const PageWrapper = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()
    const [totalSeconds, setTotalSeconds] = useState(null);

    const handleLogout = () => {
        setUser(null)
        navigate('/')
    }
    const handleLogin = () => {
        navigate('/login')
    }

    return <>
        <header>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>
                    <img src={logo} alt="Music App Logo" className="logo" style={{ width: '4%', marginRight: '20px' }} />
                    <Navbar.Brand as={NavLink} to='/' >CRAMODORO</Navbar.Brand>

                    <Nav className="justify-content-end flex-grow-1 pe-3">

                        <PomodoroTimer totalSeconds={totalSeconds} setTotalSeconds={setTotalSeconds} />


                        <Nav.Link as={NavLink} to='/' style={{ styles }}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/dashboard' style={{ styles }}>Dashboard</Nav.Link>

                        <NavDropdown title="Subjects" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">
                                Maths
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">
                                Science
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                History
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action6">
                                Geography
                            </NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to='/quiz' style={{ styles }} >Quizzes</Nav.Link>
                        <Nav.Link as={NavLink} to='/flashcards' style={{ styles }} >Flashcards</Nav.Link>

                        {
                            user ? <button onClick={handleLogout} className='nav-btn'>Logout</button> : <button onClick={handleLogin} className='nav-btn'>Log In</button>
                        }


                    </Nav>
                </Container>
            </Navbar>
            {totalSeconds === 0 && <BootstrapAlert heading={'Times Up!'} warning={'Take a break, have some tea or coffee :)'} />}
        </header>
        <Outlet />
    </>
};

export default PageWrapper;
