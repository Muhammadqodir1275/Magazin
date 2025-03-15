import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); 
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-container">
        <h2>Saralangan</h2>
        {cartItems.length === 0 ? (
          <p>Saralanganlar bo‘sh</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="Cards" key={index}>
              <div className="card-img">
                <img src={item.img} alt="rasm" />
              </div>
              <div className="name">
                <h4>{item.nomi}</h4>
              </div>
              <div className="maney">
                <p>{item.pul}</p>
              </div>
              <div className="saralash">
                <i
                  className="fa-heart fa-solid liked" 
                  onClick={() => dispatch(removeFromCart(item))}
                ></i>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
