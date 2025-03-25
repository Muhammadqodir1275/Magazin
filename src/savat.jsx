import React, { useState } from "react";
import { useSavat } from "./context/SavatProvider"; 
import "./savat.css";

const Savat = () => {
  const { savat, removeFromSavat, increment, decrement } = useSavat(); 
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
    <div className="savat-container">
      <h2>Savat</h2>
      {savat.length === 0 ? (<p>Savat bo‘sh</p>) : (
        <>
          <div className="select-all">
            <div className="savatnav">
              <input
                type="checkbox"
                id="selectAll"
                checked={selectedItems.length === savat.length}
                onChange={handleSelectAll}
              />
              <label htmlFor="selectAll">Hammasini tanlash</label>
              <button onClick={handleClearAll}>Hammasini O'chirish</button>
            </div>
            <div className="savatWrapper">
              <div className="savatBox">
                {savat.map((item) => (
                  <div className="savat-item" key={item.nomi}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.nomi)}
                      onChange={(e) => handleSelectItem(e, item.nomi)}
                    />
                    <img src={item.img} alt={item.nomi} className="savat-item-img" />
                    <h4>{item.nomi}</h4>
                    <button onClick={() => {
                      console.log("Item obyekt:", item);
                      increment(item);
                    }}>
                      +
                    </button>


                    <span>{item.miqdor}</span>
                    <button onClick={() => decrement(item)}>-</button>
                    <p>{(item.pul * item.miqdor).toLocaleString()} so‘m</p>
                    <button onClick={() => removeFromSavat(item)}>
                      <i className="fa-solid fa-trash"></i> O‘chirish
                    </button>
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
                    <span>{umumiySumma} so‘m</span>
                  </div>
                  <div className="rasmilashtirish">
                    <button className="checkout-button" onClick={()=>{
                      alert("Rasmiylashtirildi")
                    }}>Rasmiylashtirish</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Savat;
