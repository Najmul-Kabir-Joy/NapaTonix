import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import useDoctors from '../../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const { doctors, setSearchDoctors, searchDoctors } = useDoctors();
    const handleSearch = event => {
        const searchInput = event.target.value;
        const matchDoctors = doctors.filter(doctor => doctor.doctor_name.toLowerCase().includes(searchInput.toLowerCase()))
        setSearchDoctors(matchDoctors);
    }
    return (
        <Container>
            <Form>
                <Form.Group className="m-5" controlId="exampleForm.ControlInput2">
                    <Form.Control onChange={handleSearch} type="text" placeholder="Search with doctors name" />
                </Form.Group>
            </Form>
            <Row xs={1} md={3} className="g-5">
                {
                    searchDoctors.map(doctor => <Doctor doctor={doctor} key={doctor.id}></Doctor>)
                }
            </Row>
        </Container>
    );
};

export default Doctors;