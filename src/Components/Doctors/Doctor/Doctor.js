import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { doctor } = props;
    const { doctor_name, special_in, doctor_img, degree } = doctor;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={doctor_img} height="300" />
                <Card.Body>
                    <Card.Title className='h1'>{doctor_name}</Card.Title>
                    <small>{degree}</small>
                    <Card.Text className='fw-bold h6'>
                        {special_in}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;