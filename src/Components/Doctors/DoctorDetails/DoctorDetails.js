import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const DoctorDetails = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img src="" alt="" />
                </Col>
                <Col>
                    <h3>Name, degree</h3>
                    <small>Depts</small>
                    <p>Description</p>
                    <div>
                        <div>
                            <i className="far fa-envelope"></i>
                            <p>Email</p>
                        </div>
                        <div>
                            <i className="fas fa-phone"></i>
                            <p>Phone</p>
                        </div>
                    </div>
                    <div>
                        <i className="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorDetails;