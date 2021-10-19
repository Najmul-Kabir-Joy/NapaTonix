import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ width: '99%', bottom: '0' }}>
            <Row lg={3} md={2} sm={1} className='bg-primary footer-container mt-5 p-3 text-light' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Col>
                    <div className='display-6 mb-4'>
                        <i className="fas fa-clinic-medical"></i> NapaTonix <i className="fas fa-clinic-medical"></i>
                    </div>
                    <div className='text-start' style={{ wordSpacing: '1px' }}>
                        <p>A missionary hospital to server the people of Bangladesh and provide quality health care facility.This an organization for the people by the people.
                        </p>
                    </div>
                </Col>
                <Col>
                    <h6>Quick Links</h6>
                    <Row md={2} sm={1} className='g-5 mb-3 h6'>
                        <Col className='text-light text-end' style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to='/home' className='text-light mb-2'>Home</Link>
                            <Link to='/aboutus' className='text-light mb-2'>About</Link>
                            <Link to='services' className='text-light'>Services</Link>
                        </Col>
                        <Col className='text-light text-start' style={{ display: 'flex', flexDirection: 'column' }}>
                            <Link to='/experts' className='text-light mb-2'>Experts</Link>
                            <Link to='login' className='text-light mb-2'>Login</Link>
                            <Link to='signup' className='text-light'>Signup</Link>
                        </Col>
                    </Row>
                    <div className='mt-4'>
                        <h6>Created by Najmul Kabir Joy</h6>
                        <small>Najmul 2021 &copy; Reserved</small>
                    </div>

                </Col>
                <Col>
                    <div>
                        <h6>Our Location</h6>
                        <div >
                            <address>
                                54/4/A <br />
                                Road no: 5 <br />
                                Navana Siddque Soront <br />
                                Dhata central <br />
                                Bangladesh <br />
                            </address>
                        </div>
                        <div className='text-lg h3'>
                            <h5>Follow Us on</h5>
                            <i className="fab fa-facebook me-3"></i>
                            <i className="fab fa-instagram me-3"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;