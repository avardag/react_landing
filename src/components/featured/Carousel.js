import React from "react";
import Slider from "react-slick";

import slide_one from "../../images/slide_one.jpg"
import slide_two from "../../images/slide_two.jpg"
import slide_three from "../../images/slide_three.jpg"

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div
      className="carrousel_wrapper"
      style={{height: "100vh", overflow: "hidden"}}
    >
      <Slider {...settings}>
        <div>
          <div 
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: '100vh'
            }}
            >
          </div>
        </div>
        <div>
          <div 
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: '100vh'
            }}
            >
          </div>
        </div>
        <div>
          <div 
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: '100vh'
            }}
            >
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
