import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';




import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://uzum.uz/uz/promo/fashion1" alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://uzum.uz/uz/category/vygoda-kazhdyj-den--642" alt="slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://uzum.uz/uz/category/hofmann-chegirmalari--1013" alt="slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://uzum.uz/uz/category/genau-chegirmalari--1016" alt="slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://uzum.uz/uz/category/liningda-chegirmalar--1011" alt="slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://uzum.uz/uz/category/texnosovgalar--722" alt="slide 6" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
