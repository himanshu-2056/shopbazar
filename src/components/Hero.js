import React from "react";
import Slider from "react-slick";
import { homeBanner } from "../data";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings} className="grid grid-cols-12 gap-4">
        {homeBanner.map((elem, index) => (
          <div key={index} className="col-span-12  md:col-span-4 lg:col-span-3">
            <div className="grid grid-cols-12 md:px-10 ">
              <div className="col-span-12 md:col-span-6 flex flex-col gap-5 md:justify-center mt-10 md:mt-0">
                <h3>{elem.heading}</h3>
                <h1 className="text-2xl font-semibold md:text-5xl">
                  {elem.description}
                </h1>
              </div>
              <div className="col-span-12 md:col-span-6">
                <img
                  src={elem.image}
                  className="h-[30rem] md:h-[27rem] lg:[35rem]  object-cover"
                  alt="bannerImage"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
