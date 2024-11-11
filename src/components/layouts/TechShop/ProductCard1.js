import React from 'react';
import './ProductCard1.css';

const ProductCard1 = ({ product }) => {
  return (
    <div className="product-card1">
      {/* <img src={require(`../assets/${product.image}`).default} alt={product.name} className="product-image" /> */}
      <h3>{product.name}</h3>
      <img  src={product.image}/>
      <p className="price">₹{product.price} <span className="original-price">₹{product.originalPrice}</span></p>
    </div>
  );
};

export default ProductCard1;
