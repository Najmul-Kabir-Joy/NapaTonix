import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const { service } = props;
    const { id, service_name, service_img } = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={service_img} height="250px" />
                <Card.Body>
                    <Card.Title>{service_name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
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