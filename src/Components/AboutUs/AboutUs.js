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
                                <p>One of the many challenges in today’s healthcare system is quality service, made available at an affordable cost. In this year we will also be focussing on investing in training and development of human resource. A smart and mature team is the backbone of any organization. We want our team to grow with us. Many members of our team are with us since the inception phase and have contributed all these years in our progress. We are providing value-based education and training to our team and their families. Empowering the team with crucial decision-making rights and pushing them to perform at higher levels, reveal their inner strengths and capabilities.</p>
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
                                <p>Specialist is defined as an expert in some field or a person who concentrates his or her energies on a specific field. A doctor who focuses on care of the heart is an example of a heart specialist. Any of several noncommissioned ranks in the US Army that correspond to that of corporal through sergeant first class</p>
                            </Col>
                        </Row>
                        <Row className='my-5' lg={2} md={1} xs={1}>
                            <Col className='aboutus-text'>
                                <h3>Online Counselling</h3>
                                <p>The Covid-19 outbreak has adversely affected the psychological health of many people. From tiny to major crises, people need emotional and mental health support to deal with anxieties, loneliness, frustration and suicidal thoughts more than ever. Online and tele-counselling services these days are more sought out options for people with anxiety issues for a number of reasons. They can share their problems and get support while maintaining anonymity and can also maintain social distancing amid this pandemic. Here are some mental health help and support helpline where you can seek for any assistance and counselling over the phone or online.</p>
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
                                <p>Friendly, describes people who are kind, caring, and make you feel comfortable. You might be new to town, but the people are so friendly that you'll soon feel right at home. The noun friend is at the root of the adjective friendly. When you're friendly, you treat everyone like a friend — with warmth and respect.</p>
                            </Col>
                        </Row>
                        <Row className='my-5' lg={2} md={1} xs={1}>
                            <Col className='aboutus-text'>
                                <h3>Complete Checkup</h3>
                                <p>What is Full Body Checkup? Full body check up is complete health checkup or diagnostic scan of your entire body including heart, kidney, liver, lung to assess your current health status & to screen you to know if you have any apparent warning signs or if any abnormalities lying inside your body.</p>
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