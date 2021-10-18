import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const { services, setSearchProducts, searchProducts } = useServices();
    const handleSearch = event => {
        const searchInput = event.target.value;
        const matchProducts = services.filter(service => service.service_name.toLowerCase().includes(searchInput.toLowerCase()))
        setSearchProducts(matchProducts);
    }
    return (
        <div>
            <Container className='mt-5'>
                <Form>
                    <Form.Group className="m-5" controlId="exampleForm.ControlInput2">
                        <Form.Control onChange={handleSearch} type="text" placeholder="Search here" />
                    </Form.Group>
                </Form>

                <Row xs={1} md={4} className="g-5">
                    {
                        searchProducts?.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;