import React from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import logo from '../../assets/Cramodoro Favicon.png'
import timer from '../../assets/timer.png'


import { PomodoroTimer } from '..'



const styles = ({ isActive }) => ({ color: isActive ? '#ECD444' : 'black' });

const PageWrapper = () => {
    return <>
        <header>
            <Navbar bg="light" expand="lg" fixed="top">
                <Container fluid>
                    <img src={logo} alt="Music App Logo" className="logo" style={{ width: '4%', marginRight: '20px' }} />
                    <Navbar.Brand href="/">CRAMODORO</Navbar.Brand>

                    <Form className="d-flex mx-5">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    <Nav className="justify-content-end flex-grow-1 pe-3">

                        <PomodoroTimer />


                        <Nav.Link href="/" style={{ styles }}>Home</Nav.Link>
                        <Nav.Link href="/dashboard" style={{ styles }}>Dashboard</Nav.Link>

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

                        <Nav.Link href="/Quiz" style={{ styles }} >Quizzes</Nav.Link>
                        <Nav.Link href="/flashcards" style={{ styles }} >Flashcards</Nav.Link>

                   

                      


                    </Nav>
                </Container>
            </Navbar>
        </header>
        <Outlet />
    </>
};

export default PageWrapper;
