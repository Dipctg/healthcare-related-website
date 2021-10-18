import React from 'react';
import { Carousel } from 'react-bootstrap';
import './pakeges.css';
const Pakeges = () => {
    return (
        <div className="p-2">
            <Carousel fade className="p-3" >
                <Carousel.Item>
                    <img
                        className=" container "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpC8Q2BpNz_1YbsdSsiBTMW4N9HBHE84E3Q&usqp=CAU"
                        alt="First slide"
                    />
                    <Carousel.Caption >
                        <h3>Women cancer treatment</h3>
                        <p >Our mission is to help  you. </p>
                        <button>Booking now...</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className=" container  "
                        src="https://i2.wp.com/rochkirstin.com/wp-content/uploads/2018/12/45299016_247935309222028_7154250604041207808_n.jpg?resize=750%2C422"
                        alt="Second slide"
                    />

                    <Carousel.Caption >
                        <h3>Natural Birth Program</h3>
                        <p>Our mission is to help  you. </p>
                        <button>Booking now...</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" container "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcSDnxYhOhZjo_CSI9F5zCaXFugySdSNSTQ&usqp=CAU"
                        alt="Third slide"
                    />

                    <Carousel.Caption >
                        <h3> Health CheckUp</h3>
                        <p>Our mission is to help  you. </p>
                        <button>Booking now...</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Pakeges;