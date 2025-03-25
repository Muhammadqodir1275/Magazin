import React from "react";
import "./saralangan.css";
import { useSavat } from "./context/SavatProvider";

const Saralangan = () => {
  const { saralangan, removeFromSaralangan,addToSavat } = useSavat(); 
  console.log("Saralangan:", saralangan);

  return (
    <div className="Saralangan_card">
      {
        saralangan.length === 0 ? (
          <div className="nomi">
            <h1>saralangan yo`q</h1>
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
    </div>
  );
};

export default Saralangan;
