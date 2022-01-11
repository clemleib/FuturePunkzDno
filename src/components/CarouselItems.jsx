import React, {useEffect} from "react";
import Slider from "react-slick";
import { Images } from "../utils/images";

const CarouselItems = ({ rtl, speed }) => {
  

  var settings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    pauseOnHover: 'false',
    speed: speed,
    dots: false,
    rtl: rtl,
  };
  return (
    <div className="CarouselItems">
      {" "}
      <Slider {...settings}>
        {Images.map((image) => (
          <img src={`/images/gallery/${image.image}`} alt="" className="p-2" />
        ))}
      </Slider>
    </div>
  );
};

export default CarouselItems;
