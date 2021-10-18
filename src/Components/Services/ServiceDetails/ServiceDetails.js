import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    const { serviceId } = useParams();
    const matched = services.find(s => s.id == serviceId);
    return (
        <Container>
            <img src={matched?.service_img} alt="" width='50%' />
            <h1>{matched?.service_name}</h1>
            <p style={{ fontSize: "1.2em", textAlign: 'start' }}>{matched?.description.short_des}</p>
            <div className="text-start mt-4">
                <h1>
                    <i className="fas fa-user-tag text-primary"></i> {matched?.available_specialists} Specialits
                </h1>
            </div>
            <div className="text-start mt-4 mb-5">
                <h1>
                    <i className="fas fa-user-md text-primary"></i> {matched?.doctors} Experienced Doctors
                </h1>
            </div>
            <h4 className='text-start mb-3'>Facilities</h4>

            <div className='text-start'>
                {
                    matched?.description?.facilities?.map(e => <p><i className="fas fa-check-circle text-primary"></i> {e}</p>)
                }
            </div>
            <h4 className='text-start mb-3 mt-5'>Medical laboratory and specialists services</h4>
            <div className='text-start'>
                {
                    matched?.description?.keypoints?.map(e => <p><i className="fas fa-star text-primary"></i> {e}</p>)
                }
            </div>
        </Container>
    );
};

export default ServiceDetails;