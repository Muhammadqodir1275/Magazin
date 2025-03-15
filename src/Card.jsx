import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { addToSavat } from "./redux/savatSlice";
import "./Card.css";
import kiyim from "./img/kiyim.jpg";
import kopilka from "./img/kopilka.jpg";
import lenova from "./img/lenova.jpg";
import noutbook from "./img/noutbook-asij.jpg";
import skarvodka from "./img/skarvodka.jpg";
import telefon from "./img/telefon-W&O.jpg";

const mahsulotlar = [
  { img: kiyim, nomi: "Sport Kiyim", pul: 250000 },
  { img: kopilka, nomi: "Chiroyli Kopilka", pul: 120000 },
  { img: lenova, nomi: "Lenovo Laptop", pul: 6500000 },
  { img: noutbook, nomi: "Gaming Noutbook", pul: 12000000 },
  { img: skarvodka, nomi: "Smart Soat", pul: 500000 },
  { img: telefon, nomi: "Samsung Telefon", pul: 3200000 },
];

const Card = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const savat = useSelector((state) => state.savat);
  const [likes, setLikes] = useState(Array(mahsulotlar.length).fill(false));

  const toggleLike = (index, item) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);

    if (newLikes[index]) {
      dispatch(addToCart(item));
    } else {
      dispatch(removeFromCart(item));
    }
  };

  const addSavat = (item) => {
    const isItemInSavat = savat.some((savatItem) => savatItem.nomi === item.nomi);
    if (!isItemInSavat) {
      dispatch(addToSavat(item));
    }
  };

  return (
    <div className="cards-container">
      {mahsulotlar.map((item, index) => (
        <div className="Cards" key={index}>
          <div className="card-img">
            <img src={item.img} alt="rasm" />
          </div>
          <div className="name">
            <h4>{item.nomi}</h4>
          </div>
          <div className="maney">
            <p>{item.pul.toLocaleString()} so‘m</p>
            <i className="fa-solid fa-shopping-cart" onClick={() => addSavat(item)}> +</i>
          </div>
          <div className="saralash">
            <i
              className={`fa-heart ${likes[index] ? "fa-solid liked" : "fa-regular"}`}
              onClick={() => toggleLike(index, item)}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
