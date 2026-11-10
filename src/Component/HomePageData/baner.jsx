import React from "react";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default;

function BanerSection() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="baner-section">
            <Slider {...settings}>

                <div className="baner-slide baner-slide1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 m-auto">
                                <div className="baner-slide-text">
                                    <h6>START TO LEARNING TODAY</h6>
                                    <h1>Online Courses From Leading Experts</h1>
                                    <button>FIND COURSES</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="baner-slide baner-slide2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 m-auto">
                                <div className="baner-slide-text">
                                    <h6>START TO LEARNING TODAY</h6>
                                    <h1>Explore Interests and Career With Courses</h1>
                                    <button>FIND COURSES</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
}

export default BanerSection;
