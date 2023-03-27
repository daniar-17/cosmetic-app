import React from "react";
import "./testimonials.css";
import { Data } from "./Data";

//Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

//Import Required Styles
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">Apa Kata Mereka</h2>
      <span className="section__subtitle">Testimoni</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
