import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const { doctor } = props;
    const { id, doctor_name, special_in, doctor_img, degree } = doctor;
    return (
        <Col className='doctor_card'>
            <Card style={{ border: 'none' }}>
                <Card.Img variant="top" src={doctor_img} height="300" />
                <Card.Body>
                    <Card.Title className='h1'>{doctor_name}</Card.Title>
                    <small>{degree}</small>
                    <Card.Text className='fw-bold h6'>
                        {special_in}
                    </Card.Text>
                    <Card.Text className='text-end'>
                        <Link to={`/doctor/${id}`}>
                            <i className="fas fa-info-circle h3 text-end"></i>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;