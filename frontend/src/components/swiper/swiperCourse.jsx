"use client";

import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Cards } from "../cards/card";

const SwiperCourse = () => {
  return (
    <Swiper
      initialSlide={1}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      }}
      navigation={true}
      spaceBetween={0}
      centeredSlides={true}
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
          initialSlide: 3,
        },
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {new Array(10)
        .fill(0)
        .map((_, index) => index + 1)
        .map((i) => (
          <SwiperSlide key={i + 1}>
            <Cards.CardCourse1 />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperCourse;
