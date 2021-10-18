import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about1 from '../../Images/aboutus/about1.jpg';
import about2 from '../../Images/aboutus/about2.jpg';
import about3 from '../../Images/aboutus/about3.jpg';
import about4 from '../../Images/aboutus/about4.jpg';
import about5 from '../../Images/aboutus/about5.jpg';
import Partner from '../Home/Partners/Partners';
import './AboutUs.css';
import Faq from './FAQ/Faq';

const AboutUs = () => {
    return (
        <div style={{ width: '99%' }}>
            <Container>
                <div className='mt-5'>
                    <h1>ABOUT</h1>
                </div>
                <div className="display-3 mt-4">
                    <i className="fas fa-clinic-medical"></i> NapaTonix <i className="fas fa-clinic-medical"></i>
                </div>
                <div className='mt-4'>
                    <p>A missionary hospital to server the people of Bangladesh and provide quality health care facility
                        We have dedicated experts people to serve medical service at a cheaper price. We have all the digital equipments.
                        We are ready to serve. 24/7 emergency doctor. Quick Ambulance service. Not only that, we also have a team for online support at any moment.
                        This an organization for the people by the people.
                    </p>
                </div>
                <div>
                    <Container>
                        <Row className='my-5' lg={2} md={1} xs={1}>
                            <Col className='aboutus-text'>
                                <h3>Quality service at Affordable Cost</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit in libero quo laborum? Et labore consequatur amet, excepturi ut odit provident cum reprehenderit numquam incidunt ullam laborum quod vel quidem nostrum eum maxime. Accusamus rem, impedit iusto molestias ex sint consectetur accusantium saepe sit eum omnis facere culpa expedita.</p>
                            </Col>
                            <Col className="about-img">
                                <img src={about5} alt="" height="450" width="85%" />
                            </Col>
                        </Row>
                        <Row className='my-5' lg={2} md={1} xs={1}>
                            <Col className="about-img">
                                <img src={about1} alt="" height="450" width="85%" />
                            </Col>
                            <Col className='aboutus-text'>
                                <h3>Top Specialist</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fugit in libero quo laborum? Et labore consequatur amet, excepturi ut odit provident cum reprehenderit numquam incidunt ullam laborum quod vel quidem nostrum eum maxime. Accusamus rem, impedit iusto molestias ex sint consectetur accusantium saepe sit eum omnis facere culpa expedita.</p>
                            </Col>
                        </Row>
                        <Row className='my-5' lg={2} md={1} xs={1}>
                            <Col className='aboutus-text'>
                                <h3>Online Counselling</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In delectus laudantium aperiam, ab consequatur inventore ipsum beatae qui ipsa nihil esse, tempora eligendi distinctio necessitatibus asperiores ullam accusantium recusandae nobis corporis quasi. Repellendus ut ipsam quisquam, excepturi fugit, doloremque laudantium accusamus, aperiam quasi reprehenderit culpa ullam laborum neque quod. Magnam, quo!</p>
                            </Col>
                            <Col className="about-img">
                                <img src={about2} alt="" height="450" width="85%" />
                            </Col>
                        </Row>
                        <Row className='my-5' lg={2} md={1} xs={1}>
                            <Col className="about-img">
                                <img src={about3} alt="" height="450" width="85%" />
                            </Col>
                            <Col className='aboutus-text'>
                                <h3>Friendly Doctors</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente perspiciatis ad tempore ea. Cupiditate rerum iste tempore nobis quas recusandae iusto fugit sit quo error nesciunt at numquam eius pariatur accusantium veritatis praesentium enim aliquam, eligendi fugiat labore animi laudantium dolor? Sint dolorum exercitationem dolor quam doloremque dolore. Rem, dolorum.</p>
                            </Col>
                        </Row>
                        <Row className='my-5' lg={2} md={1} xs={1}>
                            <Col className='aboutus-text'>
                                <h3>Complete Checkup</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facilis illo modi ipsa! Officia dolores reprehenderit eius quisquam? Delectus numquam perspiciatis dolorem est quis officiis non odit tempore ex qui, asperiores hic iusto alias exercitationem amet veritatis voluptatum! Voluptatibus illum ipsa beatae dolorum nostrum sequi ducimus quis cupiditate sed aspernatur?</p>
                            </Col>
                            <Col className="about-img">
                                <img src={about4} alt="" height="450" width="85%" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Faq></Faq>

                <div className='my-5'>
                    <Partner></Partner>
                </div>
            </Container>

        </div>
    );
};

export default AboutUs;