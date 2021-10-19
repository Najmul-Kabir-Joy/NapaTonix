import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const { service } = props;
    const { id, service_name, service_img, description } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={service_img} height="250px" />
                <Card.Body>
                    <Card.Title>{service_name}</Card.Title>
                    <Card.Text className='text-start ps-2'>
                        {description.short_des.slice(0, 220)}...
                    </Card.Text>
                    <Card.Text className='text-end'>
                        <Link to={`/service/${id}`}>
                            <i className="fas fa-info-circle h3 text-end"></i>
                        </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;