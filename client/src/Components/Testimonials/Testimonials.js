import React from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialsData }  from '../../Data.js'; 

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 300,
          touchMove: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 300,
          touchMove: true,
          variableWidth: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  
  const generateKey = (pre) => {
    return `${pre}_${ new Date().getTime()}`;
}
  return (
    <div className="container testimonial-section" id="testimonials">
      <div className="section-title">
        <h5>Testimonials</h5>
        <span className="line"></span>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonialsData?.map((item) => (
              <div className="content-slider-main" key={generateKey(item.id)}>
                <div className="content-slider" >
                  <p>{item.des}</p>
                  <p>{item.name}</p>
                </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;