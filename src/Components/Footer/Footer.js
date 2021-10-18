import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ width: '99%', bottom: '0' }}>
            <Row lg={3} md={2} sm={1} className='bg-primary footer-container mt-5 p-3 text-light' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Col>
                    <div className='display-4 mb-4'>
                        <i className="fas fa-clinic-medical"></i> NapaTonix <i className="fas fa-clinic-medical"></i>
                    </div>
                    <div className='text-start' style={{ wordSpacing: '1px' }}>
                        <p>A missionary hospital to server the people of Bangladesh and provide quality health care facility.This an organization for the people by the people.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <h6>Quick Links</h6>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Experts</p>
                        <p>Login</p>
                        <p>Signup</p>
                    </div>
                    <div>
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