import React from "react";
import "../style/saralangan.css";
import Navbar from '../companent/navbar'
import Footer from "../companent/Footer";
import { useSavat } from "../context/SavatProvider";
import { Link } from "react-router-dom";
const Saralangan = () => {
  const { saralangan, removeFromSaralangan, addToSavat } = useSavat();
  console.log("Saralangan:", saralangan);

  return (
    <div className="Saralangan_card">
      <Navbar />
      {
        saralangan.length === 0 ? (
          <div className="no-products">
            <img src="https://asaxiy.uz/custom-assets/images/heart-bubble.svg" alt="No products" />
            Sevimli mahsulotlar yo'q
            <span>❤️ Mahsulotga belgi qo'shing</span>
            <Link to={"/"}>
              <button>Asosiy Menyu</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="nomi">
              <h1>Saralangan mahsulotlar</h1>
            </div>
            <div className="map">
              {
                saralangan.map((item, index) => (
                  <div className="Cards" key={index}>
                    <div className="card-img">
                      <img src={item.img} alt="rasm" />
                    </div>
                    <div className="name">
                      <h4>{item.nomi}</h4>
                    </div>
                    <div className="maney">
                      <p>{item.pul.toLocaleString()} so‘m</p>
                      <i className="fa-solid fa-shopping-cart" onClick={() => addToSavat(item)}> +</i>
                    </div>
                    <div className="saralash">
                      <i className="fa-heart fa-solid liked" onClick={() => (removeFromSaralangan(item))}></i>
                    </div>
                  </div>
                ))
              }
            </div>
          </>
        )
      }
      <Footer />
    </div>
  );
};

export default Saralangan;
