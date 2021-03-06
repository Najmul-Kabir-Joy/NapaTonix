import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDoctors from '../../../Hooks/useDoctors';
import useServices from '../../../Hooks/useServices';
import Doctor from '../../Doctors/Doctor/Doctor';
import ServiceCard from '../../Services/ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import NewsTeller from '../NewsTeller/NewsTeller';
import Partner from '../Partners/Partners';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    const { services } = useServices();
    const { doctors } = useDoctors();
    return (
        <div>
            <Banner></Banner>
            <Container className='my-4'>
                <h1 className='mb-5'>OUR SERVICES</h1>
                <Row xs={1} md={3} className="g-5">
                    {
                        services?.slice(0, 6).map((service) => <ServiceCard key={service.id} service={service}></ServiceCard>)
                    }
                </Row>
                <Link to='/services'><p className='text-end mt-3'>See All</p></Link>
            </Container>
            <WhyUs></WhyUs>
            <Container className='my-5'>
                <h1 className="mb-5">OUR EXPERTS</h1>
                <Row xs={1} md={3} className="g-5">
                    {
                        doctors?.slice(0, 6).map((doctor) => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </Row>
                <Link to='/doctors'><p className='text-end mt-3'>See All</p></Link>
            </Container>
            <NewsTeller></NewsTeller>
            <Partner></Partner>

        </div >
    );
};

export default Home;