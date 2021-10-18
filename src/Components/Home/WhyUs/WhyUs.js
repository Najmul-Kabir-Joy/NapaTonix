import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './whyUs.css';

const WhyUs = () => {
    return (
        <div>
            <Container className='my-5'>
                <h1 className='mt-5'>WHY CHOOSE US</h1>
                <hr />
                <Row lg={4} md={2} sm={1}>
                    <Col className='my-3'>
                        <div className='whyus_item bg-primary text-light me-3 ms-3'>
                            <h4 className='display-3'><i className="fas fa-user-md"></i></h4>
                            <h6>Expert Doctor Team</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, totam!</p>
                        </div>
                    </Col>
                    <Col className='my-3'>
                        <div className='whyus_item bg-primary text-light me-3 ms-3'>
                            <h4 className='display-3'><i className="fas fa-microscope"></i></h4>
                            <h6>Digital Diagnostic</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, totam!</p>
                        </div>
                    </Col>
                    <Col className='my-3'>
                        <div className='whyus_item bg-primary text-light me-3 ms-3'>
                            <h4 className='display-3'><i className="fas fa-laptop-medical"></i></h4>
                            <h6>Online Support</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, totam!</p>
                        </div>
                    </Col>
                    <Col className='my-3'>
                        <div className='whyus_item bg-primary text-light me-3 ms-3'>
                            <h4 className='display-3'><i className="fas fa-user-md"></i></h4>
                            <h6>Expert Doctor Team</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, totam!</p>
                        </div>
                    </Col>
                </Row>
                <Container className='my-5'>
                    <Row className='text-primary'>
                        <Col>
                            <div>
                                <i className="fas fa-hospital-alt display-1 mb-3"></i>
                                <h6 className='text-dark h1'>57</h6>
                                <small className='text-dark h5'>Hospitals</small>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <i className="fas fa-globe-europe display-1 mb-3"></i>
                                <h6 className='text-dark h1'>23</h6>
                                <small className='text-dark h5'>Countries</small>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <i className="fas fa-stethoscope display-1 mb-3"></i>
                                <h6 className='text-dark h1'>400+</h6>
                                <small className='text-dark h5'>Specialists</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container >
        </div >
    );
};

export default WhyUs;