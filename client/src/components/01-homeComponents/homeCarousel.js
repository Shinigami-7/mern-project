import React from 'react';
import Slider from 'react-slick';
import "./carousel.css";

function HomeSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slider-item">
                    <img src='anime-fig.jpg' alt="Slide 1" />
                </div>
                <div className="slider-item">
                    <img src='zoro-sword.jpg' alt="Slide 2" />
                </div>
                <div className="slider-item">
                    <img src='otaku-jatra.jpg' alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
}

export default HomeSlider;
