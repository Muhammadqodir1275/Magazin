// Carousel.jsx
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../style/Carousel.css"; 

import { useSavat } from "../context/SavatProvider";
import { Link } from "react-router-dom";

const Carousel = () => {
  const { addToSavat, toggleSaralangan, saralangan, sortedData, searchQuery } = useSavat();

  if (searchQuery) return null;

  const responsive = {
    0: { items: 1 },
    480: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Eng mashhur mahsulotlar</h2>
      <div className="carusel-body">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={20}
          nav
          autoplay
          autoplayTimeout={3000}
          dots
          responsive={responsive}
        >
          {sortedData.map((item) => (
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
                <i
                  className="fa-solid fa-shopping-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToSavat(item);
                  }}
                >
                  {" "}
                  +
                </i>
              </div>
              <div className="saralash">
              <i
                className={`fa-heart ${
                  saralangan.some((likedItem) => likedItem.nomi === item.nomi)
                    ? 'fa-solid liked'
                    : 'fa-regular'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSaralangan(item);
                }}
              ></i>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Carousel;




// import React from 'react';
// import '../style/Carousel.css';
// import { useSavat } from '../context/SavatProvider';
// import { Link } from 'react-router-dom';

// const Carousel = () => {
//   const { addToSavat, toggleSaralangan, saralangan, sortedData, searchQuery } = useSavat();
//   if (searchQuery) return null;

//   return (
//     <div className="carousel-container">
//       <h2 className="carousel-title">Eng mashhur mahsulotlar</h2>
//       <div className="carousel-wrapper">
//         {sortedData.map((item) => (
//           <div className="Cards" key={item.id}>
//             <Link to={`page/${item.id}`} style={{ textDecoration: 'none' }}>
//               <div className="card-img">
//                 <img src={item.img} alt={item.nomi} />
//               </div>
//               <div className="name">
//                 <h4>{item.nomi}</h4>
//               </div>
//             </Link>
//             <div className="maney">
//               <p>{item.pul.toLocaleString()} so‘m</p>
//               <i
//                 className="fa-solid fa-shopping-cart"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   addToSavat(item);
//                 }}
//               >
//                 {' '}
//                 +
//               </i>
//             </div>
//             <div className="saralash">
//               <i
//                 className={`fa-heart ${
//                   saralangan.some((likedItem) => likedItem.nomi === item.nomi)
//                     ? 'fa-solid liked'
//                     : 'fa-regular'
//                 }`}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleSaralangan(item);
//                 }}
//               ></i>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
