import React, { useState } from "react";

import "../style/savat.css";
import Navbar from '../companent/navbar'
import Footer from "../companent/Footer";
import { useSavat } from "../context/SavatProvider";
import { Link } from "react-router-dom";

const Savat = () => {
  const { savat, removeFromSavat, increment, decrement,rasmiylashtirish } = useSavat();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allItemNames = savat.map((item) => item.nomi);
      setSelectedItems(allItemNames);
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (e, itemName) => {
    if (e.target.checked) {
      setSelectedItems([...selectedItems, itemName]);
    } else {
      setSelectedItems(selectedItems.filter((name) => name !== itemName));
    }
  };

  const handleClearAll = () => {
    selectedItems.forEach((itemName) => {
      const item = savat.find((savatItem) => savatItem.nomi === itemName);
      if (item) {
        removeFromSavat(item);
      }
    });
    setSelectedItems([]);
  };

  const jamiMahsulotlarSoni = savat.reduce((sum, item) => sum + item.miqdor, 0).toLocaleString();
  const umumiySumma = savat.reduce((sum, item) => sum + item.pul * item.miqdor, 0).toLocaleString();

  return (
    <>
      <div className="savat-container">
        <Navbar />
        {savat.length === 0 ? (
          <div className="no-products">
            <img src="https://asaxiy.uz/custom-assets/images/cabinet/basket_no_page.png" alt="No products" />
            Savatingizda hali biror narsa yo‘q.
            <span>Asosiy ma'lumotlardan boshlang yoki qidiruv funksiyasidan foydalanib mahsulotni toping.</span>
            <Link to={"/"}>
              <button>Asosiy Menyu</button>
            </Link>
          </div>

        ) : (
          <>
            <h2>Savat</h2>
            <div className="select-all">
              <div className="savatWrapper">
                <div className="savatBox">
                  <div className="savatnav">
                    <div className="label">
                      <input
                        type="checkbox"
                        id="selectAll"
                        checked={selectedItems.length === savat.length}
                        onChange={handleSelectAll}
                      />
                      <label htmlFor="selectAll">Hammasini tanlash</label>
                    </div>
                    <button onClick={handleClearAll}>Hammasini O'chirish</button>
                  </div>
                  {savat.map((item) => (
                    <div className="savat-item" key={item.nomi}>
                      <div className="savat-item-left">
                        <input type="checkbox"
                          checked={selectedItems.includes(item.nomi)}
                          onChange={(e) => handleSelectItem(e, item.nomi)}
                        />
                        <img src={item.img} alt={item.nomi} className="savat-item-img" />
                        <div className="tavsif">
                          <h4 >{item.nomi}</h4>
                          <h5>{item.tavsif}</h5>
                        </div>
                      </div>
                      <div className="savat-item-right">
                        <div className="counter-container">
                          <button className="custom-btn" onClick={() => {
                            console.log("Item obyekt:", item);
                            increment(item);
                          }}>
                            +
                          </button>
                          <span className="number-display">{item.miqdor}</span>
                          <button onClick={() => decrement(item)} className="custom-btn">-</button>
                        </div>
                        <button onClick={() => removeFromSavat(item)}>
                          <i className="fa-solid fa-trash"></i>
                        </button>
                        <p ><span style={{ color: "black" }}>{(item.pul * item.miqdor).toLocaleString()}</span> so‘m</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="savatBuyurtma">
                  <div className="buyurtmangiz">
                    <h1>Buyurtmangiz</h1>
                  </div>
                  <div className="buyurtmalarSoni">
                    <div className="MahsulotSoni">
                      <h3>Mahsulotlar</h3>
                      <span>{jamiMahsulotlarSoni}</span>
                    </div>
                    <div className="jamiPul">
                      <h3>Jami:</h3>
                      <b><span>{umumiySumma} so‘m</span></b>
                    </div>
                    <div className="rasmilashtirish">
                      <button className="checkout-button" onClick={rasmiylashtirish}>Rasmiylashtirish</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Savat;
