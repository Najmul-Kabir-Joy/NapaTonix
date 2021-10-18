import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand><i className="fas fa-clinic-medical"></i> NapaTonix <i className="fas fa-clinic-medical"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/home' style={{ textDecoration: 'none' }}><Nav.Link href="#home">HOME</Nav.Link></Link>
                        <Link to='/aboutus' style={{ textDecoration: 'none' }}><Nav.Link href="#aboutus">ABOUT US</Nav.Link></Link>
                        <Link to='/services' style={{ textDecoration: 'none' }}><Nav.Link href="#services">SERVICES</Nav.Link></Link>
                        <Link to='/doctors' style={{ textDecoration: 'none' }}><Nav.Link href="#doctors">OUR DOCTORS</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Topbar;