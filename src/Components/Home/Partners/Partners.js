import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import partner1 from '../../../Images/partners1.jpg'
import partner2 from '../../../Images/partners2.jpg'
import partner3 from '../../../Images/partners3.jpg'
import partner4 from '../../../Images/partners4.jpg'
import partner5 from '../../../Images/partners5.jpg'
import partner6 from '../../../Images/partners6.jpg'
import partner7 from '../../../Images/partners7.jpg'
import './Partners.css';

export default class Partner extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 4,
            swipeToSlide: true,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Container>
                <div>
                    <h1 className='my-5'> OUR PARTNERS </h1>
                    <Slider {...settings}>
                        <div>
                            <Card
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Img src={partner1} height='200px' />
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Img src={partner2} height='200px' />
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Img src={partner3} height='200px' />
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Img src={partner4} height='200px' />
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <div>
                                <Card
                                    style={{ width: '18rem' }}
                                    className="mb-2"
                                >
                                    <Card.Body>
                                        <Card.Img src={partner5} height='200px' />
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div>
                            <Card
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Img src={partner1} height='200px' />
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Img src={partner6} height='200px' />
                                </Card.Body>
                            </Card>
                        </div>
                        <div>
                            <Card
                                style={{ width: '18rem' }}
                                className="mb-2"
                            >
                                <Card.Body>
                                    <Card.Img src={partner7} height='200px' />
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </div>
            </Container>
        );
    }
}
