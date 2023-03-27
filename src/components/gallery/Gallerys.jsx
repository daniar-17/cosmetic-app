import React from "react";
import "./gallerys.css";
import { Data } from "./Data";

//Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";

//Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

//Import Required Styles
import { Pagination } from "swiper";

const Gallerys = () => {
  return (
    <section className="gallery container section" id="gallery">
      <h2 className="section__title">Gallery</h2>
      <span className="section__subtitle">Foto Produk</span>

      <Swiper
        className="gallery__container"
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
        {Data.map(({ id, image }) => {
          return (
            <SwiperSlide className="gallery__card" key={id}>
              <img src={image} alt="" className="gallery__img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Gallerys;
