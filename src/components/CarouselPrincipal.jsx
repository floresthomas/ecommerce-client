import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CarouselPrincipal = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <div className="h-full w-full">
      <Slider {...settings}>
        <div>
          <img
            
            src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/48769396-74b1-4787-8e48-7f223a12bfdd___41e24f5a1899a53bff9534fd11f63142.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            
            src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/69808226-8820-4010-b9cb-ed22047a2f10___0f356379be5859aebd34cd16d2b25456.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            
            src="https://stylewatchio.vtexassets.com/assets/vtex.file-manager-graphql/images/319aa137-6603-451f-a36d-5f2b2bce1ad5___9328d5c1715d1b30eb0be9747d4e4a78.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default CarouselPrincipal;
