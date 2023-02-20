import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectSliderData }  from '../../Data.js';
const ProjectsSlider = () => {
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

export default ProjectsSlider;
