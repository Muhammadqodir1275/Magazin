import React from "react";
import { Link } from "react-router-dom";
import "../style/Card.css";
import { useSavat } from "../context/SavatProvider";

const Card = () => {
  const { addToSavat, toggleSaralangan, saralangan, searchQuery, remainingData } = useSavat();

  const filteredMahsulotlar = remainingData.filter((item) =>
    item.nomi.toLowerCase().includes(searchQuery.toLowerCase())
  );
  localStorage.setItem("filteredMahsulotlar", JSON.stringify(filteredMahsulotlar));

  return (
    <div className="cards-container">
      {filteredMahsulotlar.length > 0 ? (
        filteredMahsulotlar.map((item) => (
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
        ))
      ) : (
        <div className="qidiruv">
          <img src="https://asaxiy.uz/custom-assets/images/empty.svg" alt="No results" />
          <h3>Hech narsa topilmadi</h3>
          <p>Boshqacha qidirib ko'ring yoki so'rovingizni qisqartiring.</p>
        </div>
      )}
    </div>
  );
};

export default Card;
