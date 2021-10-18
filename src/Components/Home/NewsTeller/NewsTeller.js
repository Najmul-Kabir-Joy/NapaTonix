import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';

const NewsTeller = () => {
    const { successAlert } = useServices();
    return (
        <div>

            <Container className='bg-primary my-5 p-5 rounded text-light'>
                <h1><i className="fas fa-newspaper"></i></h1>
                <h3>Subscribe to our NewsLetter</h3>
                <h6 className='mb-5'>Get Notified for our new offers and latest medical facts and techs</h6>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Button variant='light' className='mt-3' onClick={successAlert}>SUBSCRIBE</Button>
                </Form>
            </Container>
        </div>
    );
};

export default NewsTeller;