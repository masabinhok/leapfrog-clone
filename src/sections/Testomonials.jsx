import React from "react";
import Slider from "react-slick";
import { phil, laudio, laudioCeo, puran } from "../assets";
import TestimonialCard from "../components/TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "../constants/testimonials";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    adaptiveHeight: true,
  };

  return (
    <section className="max-w-[1320px] mx-auto my-8 px-4 max-xl:max-w-full ">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <TestimonialCard
              ceo={testimonial.ceo}
              say={testimonial.say}
              name={testimonial.name}
              post={testimonial.post}
              company={testimonial.company}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
