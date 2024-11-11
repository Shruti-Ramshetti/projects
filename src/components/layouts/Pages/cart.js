import react,{Component} from "react";
import products1 from '../Pages/data1';
import '../Cart/product.css';
import React, { useState } from 'react';

const CartPage = ({ cart }) => {
    return (
      <div>
        <h1>Cart Page</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default CartPage;