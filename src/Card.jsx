import React from "react";
import { useSavat } from "./context/SavatProvider"; 
import kiyim from "./img/kiyim.jpg";
import kopilka from "./img/kopilka.jpg";
import lenova from "./img/lenova.jpg";
import noutbook from "./img/noutbook-asij.jpg";
import skarvodka from "./img/skarvodka.jpg";
import telefon from "./img/telefon-W&O.jpg";
import "./Card.css";

const mahsulotlar = [
  { img: kiyim, nomi: "Sport Kiyim", pul: 250000 },
  { img: kopilka, nomi: "Chiroyli Kopilka", pul: 120000 },
  { img: lenova, nomi: "Lenovo Laptop", pul: 6500000 },
  { img: noutbook, nomi: "Gaming Noutbook", pul: 12000000 },
  { img: skarvodka, nomi: "Smart Soat", pul: 500000 },
  { img: telefon, nomi: "iPhone  Telefon", pul: 3200000 },
  { img: "img/naushnik.jpg", nomi: "Naushnik", pul: 150000 },
  { img: "img/qol_soat.jpg", nomi: "Qo‘l Soati", pul: 450000 },
  { img: "img/kreslo.jpg", nomi: "Ofis Kreslosi", pul: 2000000 },
  { img: "img/klaviatura.jpg", nomi: "Gaming Klaviatura", pul: 500000 },
  { img: "img/sichqoncha.jpg", nomi: "Dasturiy Sichqoncha", pul: 300000 },
  { img: "img/planshet.jpg", nomi: "Samsung Planshet", pul: 2700000 },
  { img: "img/sumka.jpg", nomi: "Laptop Sumkasi", pul: 250000 },
  { img: "img/monitor.jpg", nomi: "LG Monitor", pul: 3500000 },
  { img: "img/printer.jpg", nomi: "HP Printer", pul: 1800000 },
  { img: "img/usb.jpg", nomi: "16GB USB Flash", pul: 80000 },
  { img: "img/powerbank.jpg", nomi: "Powerbank 10000mAh", pul: 220000 },
  { img: "img/kamerali_drone.jpg", nomi: "Kamerali Drone", pul: 4500000 },
  { img: "img/oyna.jpg", nomi: "Yangi Oyna", pul: 350000 },
  { img: "img/airpods.jpg", nomi: "Apple AirPods", pul: 1200000 },
  { img: "img/mikrofon.jpg", nomi: "Podkast Mikrofon", pul: 750000 },
  { img: "img/kofemashina.jpg", nomi: "Kofe Mashinasi", pul: 950000 },
  { img: "img/velosiped.jpg", nomi: "Sport Velosiped", pul: 5000000 },
  { img: "img/oyoq_kiyim.jpg", nomi: "Brendli Oyoq Kiyim", pul: 600000 },
  { img: "img/gitar.jpg", nomi: "Elektr Gitara", pul: 2200000 },
  { img: "img/kamera.jpg", nomi: "Sony Kamera", pul: 8700000 },
  { img: "img/termo.jpg", nomi: "Termos", pul: 140000 },
  { img: "img/chemodan.jpg", nomi: "Sayohat Chemodani", pul: 800000 },
  { img: "img/televizor.jpg", nomi: "Samsung 4K TV", pul: 7000000 },
  { img: "img/konditsioner.jpg", nomi: "Konditsioner", pul: 3500000 },
];


const Card = () => {
  const { addToSavat, toggleSaralangan, saralangan, searchQuery } = useSavat();


  const filteredMahsulotlar = mahsulotlar.filter((item) =>
    item.nomi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="cards-container">
      {filteredMahsulotlar.length > 0 ? (
        filteredMahsulotlar.map((item, index) => (
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
              <i
                className={`fa-heart ${saralangan.some((likedItem) => likedItem.nomi === item.nomi) ? "fa-solid liked" : "fa-regular" }`}
                onClick={() => toggleSaralangan(item)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>❌ Hech narsa topilmadi...</p> // 🔍 Agar natija bo‘lmasa, xabar chiqarish
      )}
    </div>
  );
};

export default Card;
