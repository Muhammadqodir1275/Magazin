import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../style/Carousel.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useSavat } from '../context/SavatProvider';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const { addToSavat, toggleSaralangan, saralangan,sortedData,searchQuery } = useSavat();
  if(searchQuery) return null
  
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Eng mashhur mahsulotlar</h2>
      <div className="wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          className="mySwiper"
        >
          {sortedData.map((item) => (
            <SwiperSlide key={item.id}>
          <div className="Cards" key={item.id}>
            <Link to={`page/${item.id}`} style={{ textDecoration: "none" }}>
              <div className="card-img">
                <img src={item.img} alt={item.nomi} />
              </div>
              <div className="name">
                <h4>{item.nomi}</h4>
              </div>
            </Link>
            <div className="maney">
              <p>{item.pul.toLocaleString()} so‘m</p>
              <i className="fa-solid fa-shopping-cart" onClick={(e) => {
                e.stopPropagation(); 
                addToSavat(item);
              }}> +</i>
            </div>
            <div className="saralash">
              <i
                className={`fa-heart ${saralangan.some((likedItem) => likedItem.nomi === item.nomi) ? "fa-solid liked" : "fa-regular"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSaralangan(item);
                }}
              ></i>
            </div>
          </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
