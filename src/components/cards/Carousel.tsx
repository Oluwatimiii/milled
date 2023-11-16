"use client";
import React from "react";
import { ProductData } from "../../../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

interface CarouselProps {
  datas: ProductData[];
}

const Carousel: React.FC<CarouselProps> = ({ datas }: CarouselProps) => {
  const slider = React.useRef(null);

  var settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
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
    <div>
      {/* CAROUSEL */}
      <div className="w-full">
        <Slider ref={slider} {...settings}>
          {datas.map((data) => (
            <div
              className="font-poppins max-w-full overflow-hidden"
              key={data.id}
            >
              <Card
                id={data.id}
                name={data.name}
                src={data.src}
                productTitle={data.productTitle}
                productTitle2={data.productTitle2}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
