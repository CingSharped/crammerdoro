import { Button } from 'bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink} from 'react-router-dom';
import React, { useState } from 'react';

import { PomodoroTimer } from '..';

function NavBar() {
  

  
  return (
    <>
    <Navbar bg="light" expand="lg" className='p-2'>
          <Navbar.Brand as={NavLink} to='/dashboard'>Cramodoro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <PomodoroTimer />
            <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
            <NavDropdown title="Subjects" id="basic-nav-dropdown">
              <NavDropdown.Item>Mathematics</NavDropdown.Item>
              <NavDropdown.Item>English</NavDropdown.Item>
              <NavDropdown.Item>History</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link as={NavLink} to='/flashcards'>Flashcards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar> 
    <Outlet />
    </>
  );
  
}

export default NavBar;