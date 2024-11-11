import React from 'react';
import './CartPopup.css';

function CartPopup() {
  return (
    <div className="popup cart-popup">
      <i className="fas fa-shopping-cart cart-empty-icon"></i>
      <p>Your Cart is Empty</p>
      <button className="start-shopping-button">Start Shopping</button>
    </div>
  );
}

export default CartPopup;
