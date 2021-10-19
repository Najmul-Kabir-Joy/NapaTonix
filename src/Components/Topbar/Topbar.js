import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Topbar = () => {
    const { users, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
            <Container>
                <Link to='/home'><Navbar.Brand><i className="fas fa-clinic-medical"></i> NapaTonix <i className="fas fa-clinic-medical"></i></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to='/home' style={{ textDecoration: 'none' }}><Nav.Link href="#home">HOME</Nav.Link></Link>
                        <Link to='/aboutus' style={{ textDecoration: 'none' }}><Nav.Link href="#aboutus">ABOUT US</Nav.Link></Link>
                        <Link to='/services' style={{ textDecoration: 'none' }}><Nav.Link href="#services">SERVICES</Nav.Link></Link>
                        <Link to='/doctors' style={{ textDecoration: 'none' }}><Nav.Link href="#doctors">OUR DOCTORS</Nav.Link></Link>
                        {
                            users.email && <div><img src={users.photoURL} alt="" height="30px" style={{ borderRadius: '50%', marginTop: '5px' }} /></div>
                        }
                        {
                            users.email &&
                            <NavDropdown title={users.displayName} id="collasible-nav-dropdown">
                                <Link to='./profile'><NavDropdown.Item href="#profile">View Profile</NavDropdown.Item></Link>
                                <Link to='./home'><NavDropdown.Item href="#home" onClick={logOut}>Logout</NavDropdown.Item></Link>
                            </NavDropdown>
                        }
                        {
                            users.email ?
                                <div>

                                    <Nav.Link>
                                        <i className="fas fa-power-off" onClick={logOut}></i>
                                    </Nav.Link>
                                </div>
                                :
                                <Link to='/login' style={{ textDecoration: 'none' }}><Nav.Link href="#login">LOGIN <i className="fas fa-sign-in-alt"></i></Nav.Link></Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Topbar;