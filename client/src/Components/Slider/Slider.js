import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectSliderData }  from '../../Data.js';
const PrpjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const generateKey = (pre) => {
    return `${pre}_${ new Date().getTime()}`;
}
  return (
    <div id="slider" className="container products-slider">
      <div className="slider-title">
      <h5>Screenshots of projects I worked on</h5>
        <span className="line"></span>
      </div>
      
      <div className="slider-slide">
        <Slider {...settings} >
          {projectSliderData?.map((item,index) => (
            <div className="col-lg-12 col-md-12 col-xl-12 col-xs-12" key={generateKey(index)}>
              <div className="card content-slider">
                <img
                  src={item.img}
                  alt="A screenhot of some projects I worked on"
                  className="center-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PrpjectsSlider;
