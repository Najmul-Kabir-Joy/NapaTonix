import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImgOne from '../../../Images/10593.jpg';
import bannerImgTwo from '../../../Images/5283242.jpg';
import bannerImgThree from '../../../Images/5760660.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImgOne}
                        alt="First slide"
                        height="700"
                    />
                    <Carousel.Caption className='text-dark mb-5'>
                        <h3>Digital Equiments</h3>
                        <p>We are the first one to bring highly digital performed medical equipments</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImgTwo}
                        alt="Second slide"
                        height="700"
                    />

                    <Carousel.Caption className='text-dark'>
                        <h3>Specialized Team</h3>
                        <p>We have the best Specialized support team for our patients.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bannerImgThree}
                        alt="Third slide"
                        height="700"
                    />
                    <Carousel.Caption className='text-dark'>
                        <h3>Quick Ambulance</h3>
                        <p>Our ambulance service ready to quicky response and is waiting for your call.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default Banner;