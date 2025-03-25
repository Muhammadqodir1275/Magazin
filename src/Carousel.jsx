import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { Pagination, Navigation } from "swiper/modules";
import { useSavat } from "./context/SavatProvider";


const Slider = () => {
  const { searchQuery } = useSavat();
  if (searchQuery) return null;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Nm83M5Dgpt14H66GyuNkg9G8NRGn2NVgMA&s" alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4wyHQ8hNhyYuKr5GKZ-C7sVFdpuOWdYqtw&s" alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkdTpLliBovwzi70AG7XDm6nc1a4YQZb1mw&s" alt="slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://imageproxy.wolt.com/assets/67335e0353f626068f55e28e" alt="slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://meest.shopping/uploads/images/42023265413817f4f017f95efd9905a6.png" alt="slide 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVCCXZABBtXDyaioi0hFykevJ7CNwWGHFmg&s" alt="slide 6" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
