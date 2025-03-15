import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromSavat, increment, decrement } from './redux/savatSlice';
import './Savat.css';

const Savat = () => {
  const savatItems = useSelector((state) => state.savat);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allItemNames = savatItems.map((item) => item.nomi);
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
      const item = savatItems.find((i) => i.nomi === itemName);
      if (item) {
        dispatch(removeFromSavat(item));
      }
    });
    setSelectedItems([]);
  };

  const handleIncrement = (item) => {
    if (item.miqdor < 5) {
      dispatch(increment({ id: 1 }));
    } else {
      console.log('Maksimal miqdorga yetdi');
    }
  };

  const handleDecrement = (item) => {
    if (item.miqdor > 1) {
      dispatch(decrement({id: 1}));
    } else {
      console.log('Minimal miqdorga yetdi');
    }
  };

  const jamiMahsulotlarSoni = savatItems.reduce((sum, item) => sum + item.miqdor, 0);
  const umumiySumma = savatItems
    .reduce((sum, item) => sum + item.pul * item.miqdor, 0)
    .toLocaleString();

  return (
    <div className="savat-container">
      <h2>Savat</h2>
      {savatItems.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <>
          <div className="select-all">
            <div className="savatnav">
              <input
                type="checkbox"
                id="selectAll"
                checked={selectedItems.length === savatItems.length}
                onChange={handleSelectAll}
              />
              <label htmlFor="selectAll">Hammasini tanlash</label>
              <button onClick={handleClearAll}>Hammasini O'chirish</button>
            </div>
            <div className="savatWrapper">
              <div className="savatBox" >
                {savatItems.map((item) => (
                  <div className="savat-item" key={item.id}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.nomi)}
                      onChange={(e) => handleSelectItem(e, item.nomi)}
                    />
                    <img src={item.img} alt={item.nomi} className="savat-item-img" />
                    <h4>{item.nomi}</h4>
                    <p>{(item.pul * item.miqdor).toLocaleString()} so‘m</p>
                    <button onClick={() => handleIncrement(item)}>+</button>
                    <span>{item.miqdor}</span>
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <button onClick={() => dispatch(removeFromSavat(item))}>
                      <i className="fa-solid fa-trash"></i>
                      <span>O‘chirish</span>
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
                    <button className="checkout-button">Rasmiylashtirish</button>
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
