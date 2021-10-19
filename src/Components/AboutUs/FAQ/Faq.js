import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Faq = () => {
    return (
        <div>
            <Container className='my-5'>
                <h1 className='mb-5'>Frequently Asked Questions</h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Do we provide home testing services?</Accordion.Header>
                        <Accordion.Body>
                            What is Full Body Checkup? Full body check up is complete health checkup or diagnostic scan of your entire body including heart, kidney, liver, lung to assess your current health status & to screen you to know if you have any apparent warning signs or if any abnormalities lying inside your body.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Have we taken necessary steps for COVID-19?</Accordion.Header>
                        <Accordion.Body>
                            What is Full Body Checkup? Full body check up is complete health checkup or diagnostic scan of your entire body including heart, kidney, liver, lung to assess your current health status & to screen you to know if you have any apparent warning signs or if any abnormalities lying inside your body.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can we send specialist at your home ?</Accordion.Header>
                        <Accordion.Body>
                            The Covid-19 outbreak has adversely affected the psychological health of many people. From tiny to major crises, people need emotional and mental health support to deal with anxieties, loneliness, frustration and suicidal thoughts more than ever. Online and tele-counselling services these days are more sought out options for people with anxiety issues for a number of reasons. They can share their problems and get support while maintaining anonymity and can also maintain social distancing amid this pandemic. Here are some mental health help and support helpline where you can seek for any assistance and counselling over the phone or online.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Do you have dedicated female support?</Accordion.Header>
                        <Accordion.Body>
                            The Covid-19 outbreak has adversely affected the psychological health of many people. From tiny to major crises, people need emotional and mental health support to deal with anxieties, loneliness, frustration and suicidal thoughts more than ever. Online and tele-counselling services these days are more sought out options for people with anxiety issues for a number of reasons. They can share their problems and get support while maintaining anonymity and can also maintain social distancing amid this pandemic. Here are some mental health help and support helpline where you can seek for any assistance and counselling over the phone or online.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Faq;