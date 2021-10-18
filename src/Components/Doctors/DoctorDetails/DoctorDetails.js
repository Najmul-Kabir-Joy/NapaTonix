import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const DoctorDetails = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
            });
    }, [])
    const { doctorId } = useParams();
    const matched = doctors.find(d => d.id == doctorId);
    console.log(matched);
    return (
        <div>
            <h1 className='my-5'>About {matched?.doctor_name}</h1>
            <Container className='m-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Row xs={1} md={3} className="g-4">
                    <Link to='/doctors'><i className="fas fa-hand-point-left "></i> back</Link>

                    <Col>
                        <br />
                        <img src={matched?.doctor_img} alt="" />
                    </Col>
                    <Col className='text-start' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <h3>{matched?.doctor_name}, {matched?.degree}</h3>
                            <h5><i>{matched?.special_in}</i></h5>
                            <p>{matched?.description}</p>
                            <div style={{ fontSize: '1.1em' }}>
                                <div>
                                    <i className="far fa-envelope me-3"></i>
                                    {matched?.email}
                                </div>
                                <div>
                                    <i className="fas fa-phone me-3 mt-2 mb-4"></i>
                                    {matched?.phone}
                                </div>
                            </div>
                            <div style={{ fontSize: '1.5em', marginTop: '10px' }}>
                                <i className="fab fa-facebook me-4"></i>
                                <i className="fab fa-twitter me-4"></i>
                                <i className="fab fa-instagram me-4"></i>
                                <i className="fab fa-linkedin me-4"></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorDetails;